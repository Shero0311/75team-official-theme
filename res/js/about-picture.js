window.onload = function() {
  function useBehavior(context) {
    const { type, getDetail } = context;
    return function(subject, target) {
      const event = new CustomEvent(type, {
        bubbles: true,
        detail: getDetail.call(context, subject, target),
      });
      target.dispatchEvent(event);
    };
  }
  const preview = useBehavior({
    type: 'preview',
    getDetail(subject, target) {
      const imgs = Array.from(subject.querySelectorAll('img'));
      const selected = imgs.indexOf(target); // 获取选中图片在图片集合中的索引号
      let mask = document.getElementById('mask');
      // 给#mask元素添加点击事件处理函数：
      let idx = selected;
      mask.addEventListener('click', evt => {
        const target = evt.target;
        if (target === mask) {
          // 如果点击的对象是mask元素，则隐藏mask元素
          mask.style.display = 'none';
        } else if (target.className === 'previous') {
          // 显示上一张图片
          update(--idx);
        } else if (target.className === 'next') {
          // 显示下一张图片
          update(++idx);
        }
      });

      // 设置img元素的src属性指向指定图片
      function update(idx) {
        const [previous, next] = [...mask.querySelectorAll('span')];
        previous.style.visibility = idx ? 'visible' : 'hidden';
        next.style.visibility = idx < imgs.length - 1 ? 'visible' : 'hidden';
        const img = mask.querySelector('img');
        img.src = imgs[idx].src;
      }

      return {
        showMask() {
          // 显示选中图片的预览
          mask.style.display = 'flex';
          update(selected);
        },
      };
    },
  });

  const list = document.getElementById('picture-list');
  list.addEventListener('click', evt => {
    const target = evt.target;
    if (target.tagName === 'IMG') {
      preview(list, target);
    }
  });

  list.addEventListener('preview', ({ detail }) => {
    detail.showMask();
  });
};
