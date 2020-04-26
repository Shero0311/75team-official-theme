<% if(userAgentType === 'pc') { %>
      <ul class="list-box">
    <% } else { %>
      <div class="swiper-container module-team-mobile">
      <div class="swiper-wrapper list-box">
    <% } %>
    <% inTeam.forEach(function(item) { %>
      <% if(userAgentType === 'pc') { %>
        <li class="list-item">
      <% } else { %>
        <div class="swiper-slide list-item">
      <% } %>
          <img class="avatar" src="<%=item.avatar%>" />
          <p class="name"><%=item.name%></p>
          <p class="team-title"><%=item.title%></p>
          <p class="desc"><%=item.desc%></p>
          <div class="account">
            <% if(item.wechat) { %>
              <a href="<%=item.wechat%>" target="_blank">
                <img src="https://p0.ssl.qhimg.com/t0155c4c89962473473.png" />
              </a>
            <% } %>
            <% if(item.weibo) { %>
              <a href="<%=item.weibo%>" target="_blank">
                <img src="https://p3.ssl.qhimg.com/t017dcaa85517b46a21.png" />
              </a>
            <% } %> 
            <a href="<%=item.github ? item.github : 'https://github.com/spritejs'%>" target="_blank">
              <img src="https://p0.ssl.qhimg.com/t0107837f647b7eff89.png" />
            </a>
          </div>
        <% if(userAgentType === 'pc') { %>
        </li>
        <% } else { %>
          </div>
        <% } %>
      <% }) %>
      <% if(userAgentType === 'pc') { %>
        </ul>
      <% } else { %>
          </div>
        </div>
      <% } %>