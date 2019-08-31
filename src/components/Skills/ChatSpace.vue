<template>
  <div class="indivisual">
    <h1>Chat-Space</h1>
    <h2>OVERVIEW</h2>
    <p>
      <a href="http://3.113.93.153" class="link" target="_blank">JUMP TO "Chat-Space"</a><br><br>
      グループチャットアプリケーション<br><br>
      使用した言語：<br>
      Haml・SCSS・Ruby・Ruby on Rails・JavaScript・jQuery・MySQL・Github・AWS<br><br>
      開発期間と平均作業時間：<br>
      開発期間：約12日間　1日あたりの平均作業時間：約10時間<br><br>
      開発体制：<br>
      個人開発・Googleスプレッドシートによる進捗管理
    </p><hr>
    <h2>FUNCTION</h2>
    <div class="function-wrapper">
      <ul>
        <li class="button" @click="showModal = 1"><span>サインアップ</span></li>
        <li class="button" @click="showModal = 2"><span>ログイン・ログアウト</span></li>
        <li class="button" @click="showModal = 3"><span>ユーザー情報編集</span></li>
        <li class="button" @click="showModal = 4"><span>グループ作成・編集</span></li>
        <li class="button" @click="showModal = 5"><span>メッセージ・画像投稿</span></li>
        <li class="button" @click="showModal = 6"><span>自動更新</span></li>
      </ul>
    </div>
    <div v-if="showModal == '1'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>サインアップ</h2>
      <div class="explains">
        <img src="../../assets/skills/chat_space/chat_signup.png">
        <h4>サインアップ画面</h4>
        <p class="explain">
          <a href="http://3.113.93.153/users/sign_up" target="_blank">http://3.113.93.153/users/sign_up</a><br>
          <ul style="list-style: disc;">
            <li>gem "Devise"を用いたサインアップ機能</li>
            <li>Nameがユーザー名として登録されます</li>
            <li>EmailとPasswordはログイン時に使用します</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '2'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>ログイン・ログアウト</h2>
      <div class="explains">
        <img src="../../assets/skills/chat_space/login.png">
        <h4>ログイン画面</h4>
        <img src="../../assets/skills/chat_space/gear-exp.jpg">
        <h4>アカウント編集ページへ</h4>
        <img src="../../assets/skills/chat_space/edit_user.png">
        <h4>アカウント編集画面</h4>
        <p class="explain">
          <a href="http://3.113.93.153/users/sign_in" class="link" target="_blank">http://3.113.93.153/users/sign_in</a><br>
          <ul style="list-style: disc;">
            <li>gem "Devise"を用いたログイン・ログアウト機能</li>
            <li>登録したEmail・Passwordでログインできます</li>
            <li>ログイン後、歯車マーク（画像の矢印が指しているマーク）を押すと、アカウント編集ページへ遷移します</li>
            <li>アカウント編集ページで、ログアウトできます</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '3'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>ユーザー情報編集</h2>
      <div class="explains">
        <img src="../../assets/skills/chat_space/gear-exp.jpg">
        <h4>アカウント編集ページへ</h4>
        <img src="../../assets/skills/chat_space/edit_user.png">
        <h4>アカウント編集画面</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>登録したアカウント情報の編集機能</li>
            <li>ログイン後、歯車マーク（画像の矢印が指しているマーク）を押すと、アカウント編集ページへ遷移します</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '4'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>グループ作成・編集</h2>
      <div class="explains">
        <img src="../../assets/skills/chat_space/togroup.jpg">
        <h4>グループ作成ページへ</h4>
        <img src="https://i.gyazo.com/80161eff6a2aacc2c4bd8f4ad745cd8c.gif">
        <h4>グループ作成画面（インクリメンタルサーチ）</h4>
        <img src="../../assets/skills/chat_space/togroupedit.png">
        <h4>グループ編集ページへ</h4>
        <img src="../../assets/skills/chat_space/groupedit.png">
        <h4>グループ編集画面</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>グループ作成・編集機能</li>
            <li>ログイン後、画像の矢印が指しているマークを押すと、グループ作成ページへ遷移します</li>
            <li>チャットメンバーはインクリメンタルサーチが可能です</li>
            <li>トップページのサイドバーのグループ名をクリック後、ヘッダーの"Edit"ボタンからグループ編集ページへ遷移します</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '5'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>メッセージ・画像投稿</h2>
      <div class="explains">
        <img src="https://i.gyazo.com/e771113445d2a64798699105e1d22cd7.gif">
        <h4>メッセージ送信</h4>
        <img src="https://i.gyazo.com/87f0a2a0b848721d0c1e1c90bcc17fe2.gif">
        <h4>画像送信</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>非同期通信によるメッセージ投稿機能</li>
            <li>ログイン後、トップページのサイドバーのグループ名をクリックすると、グループチャットページへ遷移します</li>
            <li>フッターの入力欄からメッセージの投稿が行えます</li>
            <li>写真アイコンをクリックすることで、画像の投稿も可能です</li>
            <li>投稿後、JSでAjaxを用いて非同期通信を行い、メッセージを画面に表示しています</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '6'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>自動更新</h2>
      <div class="explains">
        <img src="https://i.gyazo.com/399caf0819ff3f4aafad34b25075ed7a.gif">
        <h4>自動更新（左画面で入力したものが、右画面で自動的に反映される）</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>5秒ごとの自動更新機能</li>
            <li>5秒ごとに最新のメッセージの有無を判断します</li>
            <li>JSでAjaxを用いて非同期通信を行い、メッセージを画面に表示しています</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>
  .indivisual {
    width: 85%;
    margin: 3rem auto 10rem;
    padding-bottom: 35px;
    border-bottom: solid 2px white;
    color: white;
  }
  h1 {
    text-align: center;
    font-size: 60px;
    border-bottom: double 0.6rem white;
  }
  h2 {
    text-align: center;
    font-size: 45px;
    margin-top: 4%;
  }
  p {
    display: block;
    padding: 3% 5% 5%; 
    font-size: 30px;
  }
  .link {
    color: white;
  }
  .function-wrapper {
    text-align: center;
    display: flex;
    width: 85%;
    margin: 5% auto 0;
    justify-content: center;
    -webkit-box-lines:multiple;
    -moz-box-lines:multiple;
    -webkit-flex-wrap:wrap;
    -moz-flex-wrap:wrap;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap;
  }
  ul {
    width: 100%;
    padding: 0;
    z-index: 2;
  }
  .button {
    display: inline-block;
    width: 20%;
    padding: 2%;
    margin: 1%;
    border-radius: 5%;
    color: #fff;
    background-color: rgb(50, 50, 50);
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  .button:hover {
    text-decoration: underline;
  }
  .modal {
    margin-top: 2%;
  }
  .explains {
    width: 70%;
    margin: auto;
    text-align: center;
    z-index: 2;
    position: relative;
    color: white;
  }
  .explains img {
    width: 80%;
    padding: 2% 0 1%;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 2%;
  }
  .explain {
    text-align: left;
    font-size: 20px;
  }
  .explain a {
    color: white;
  }
  .close {
    margin: 3% auto 0;
    font-size: 20px;
    border: solid 1px white;
    width: 20%;
    cursor: pointer;
    z-index: 2;
    position: relative;
    background-color: black;
  }
</style>