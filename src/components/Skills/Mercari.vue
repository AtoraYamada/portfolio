<template>
  <div class="indivisual">
    <h1>mercari</h1>
    <h2>OVERVIEW</h2>
    <p>
      <a href="http://52.199.29.90/" class="link" target="_blank">JUMP TO "mercari"</a><br>
      (ID: hoge, PW: 1234)<br><br>
      メルカリのクローンサイト<br>（登録・出品・購入まで一通り実装）<br><br>
      【使用した言語】<br>
      Haml・SCSS・Ruby・Ruby on Rails・JavaScript・jQuery・MySQL・Github・AWS<br><br>
      【開発期間と平均作業時間】<br>
      開発期間：約4週間<br>1日あたりの平均作業時間：約10時間<br><br>
      【開発体制】<br>
      アジャイル（スクラム）開発：スクラムマスター<br>
      チーム人数：6人（スクラムマスター含む）<br>
      Trelloによるタスク管理・Slackによる連絡
    </p><hr>
    <h2>FUNCTION<br>（担当箇所）</h2>
    <div class="function-wrapper">
      <ul>
        <li class="button" @click="showModal = 1"><span>DB設計</span></li>
        <li class="button" @click="showModal = 2"><span>サインアップ</span></li>
        <li class="button" @click="showModal = 3"><span>ログイン・ログアウト</span></li>
        <li class="button" @click="showModal = 4"><span>カテゴリーデータ</span></li>
        <li class="button" @click="showModal = 5"><span>動的セレクトボックス</span></li>
        <li class="button" @click="showModal = 6"><span>画像プレビュー</span></li>
        <li class="button" @click="showModal = 7"><span>商品出品</span></li>
        <li class="button" @click="showModal = 8"><span>商品編集</span></li>
      </ul>
      <p class="caution">
        【出品用アカウント】<br>email: hoge@gmail.com, PW: hogehoge<br><br>
        【購入用アカウント】<br>email: fuga@gmail.com, PW: fugafuga<br><br>
        【クレジットカード】<br>
        番号：4242424242424242<br>
        期限：未来の日付<br>
        セキュリティコード：任意の3桁の数字<br><br>
        機能確認後は、ログアウト処理をお願いします
      </p>
    </div>
    <div v-if="showModal == '1'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>DB設計</h2>
      <div class="explains">
        <img src="../../assets/skills/mercari/er.png">
        <h4>ER図</h4>
        <p class="explain">
          <a href="https://github.com/AtoraYamada/freemarket_sample_53b" target="_blank">README</a><br>
          <ul style="list-style: disc;">
            <li>詳細は上記リンクのREADMEをご参照下さい</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '2'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>サインアップ</h2>
      <div class="explains">
        <img src="../../assets/skills/mercari/signup.png">
        <h4>登録方法選択画面<br>（「メールアドレスで登録」を選択）</h4>
        <img src="../../assets/skills/mercari/signup_eg.png">
        <h4>登録１ページ目<br>（バリデーションによるエラーメッセージ）</h4>
        <p class="explain">
          <a href="http://52.199.29.90/signup" target="_blank">http://52.199.29.90/signup</a><br>
          <ul style="list-style: disc;">
            <li>ウィザード形式のフォーム</li>
            <li>メールアドレスによる登録が可能です</li>
            <li>バリデーションによるエラーメッセージが表示されます</li>
            <li>都道府県データはenumを使用しています</li>
            <li>sessionを用いて情報は一括保存されます（支払い方法まで入力後、DBに保存）</li>
            <li>登録完了後、gem "Devise"のメソッドにより、自動ログインします</li>
            <li>ローカル環境では、OmniAuthによるSNS認証も可能です（SSL化・ドメイン取得で本番環境でも動くよう実装）</li><br>
            ※ロボット認証は未実装です<br>
            ※クレジットカードは以下の数値を入力して下さい（購入時にも必要です）<br>
            番号：4242424242424242<br>
            期限：未来の日付<br>
            セキュリティコード：任意の3桁の数字<br>
          </ul>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/17/133106" target="_blank">関連ブログ記事１</a><br>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/25/164837" target="_blank">関連ブログ記事２</a><br>
          <a href="https://atora1992.hatenablog.com/entry/2019/08/29/115959" target="_blank">関連ブログ記事３</a><br>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/25/164315" target="_blank">関連ブログ記事４</a><br>
          <a href="https://atora1992.hatenablog.com/entry/2019/08/12/185922" target="_blank">関連ブログ記事５</a><br>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '3'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>ログイン・ログアウト</h2>
      <div class="explains">
        <img src="../../assets/skills/mercari/login.png">
        <h4>ログイン画面</h4>
        <img src="../../assets/skills/mercari/logout.png">
        <h4>ログアウト画面</h4>
        <p class="explain">
          <a href="http://52.199.29.90/users/sign_in" target="_blank">http://52.199.29.90/users/sign_in</a>
          <ul style="list-style: disc;">
            <li>gem "Devise"を用いたログイン・ログアウト機能</li>
            <li>登録したメールアドレス・PWによるログインが可能です</li>
            <li>ログイン後、マイページの設定→ログアウトからログアウトページへ遷移できます</li>
            <li>ローカルでは、SNS認証によるPW不要のログインが可能です（SSL化・ドメイン取得で本番環境でも動くよう実装）</li><br>
            ※ロボット認証は未実装です
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '4'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>カテゴリーデータ</h2>
      <div class="explains">
        <img src="https://i.gyazo.com/5f1a5c77f7de23adb1d8b45db66a2118.gif">
        <h4>カテゴリーデータ</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>gem "ancestry"を用いたカテゴリーデータ作成</li>
          </ul>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/08/215444" target="_blank">関連ブログ記事１</a><br>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/08/215737" target="_blank">関連ブログ記事２</a>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '5'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>動的セレクトボックス</h2>
      <div class="explains">
        <img src="https://i.gyazo.com/9147bce319e416f44732257d63af46e0.gif">
        <h4>カテゴリー・サイズ選択（服サイズ）</h4>
        <img src="https://i.gyazo.com/86c17169bd400935037d5787243ed7a4.gif">
        <h4>カテゴリー・サイズ選択（靴サイズ）</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>非同期通信による動的セレクトボックス</li>
            <li>ログイン後、商品出品・編集画面でご覧いただけます</li>
            <li>gem "ancestry"を導入し作成したカテゴリーデータを使用しています</li>
            <li>項目を選択後、選択項目を取得し、JSでAjaxを用いて非同期通信を行います</li>
            <li>選択項目と紐付くデータの取得、jbuilderでのjson成形後、jsonを用いてセレクトボックスを作成しています</li>
            <li>サイズが必要のないもの（e.g. テレビゲーム）はサイズ入力欄は生成されません</li>
          </ul>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/17/140342" target="_blank">関連ブログ記事１</a><br>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/17/154613" target="_blank">関連ブログ記事２</a>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '6'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>画像プレビュー</h2>
      <div class="explains">
        <img src="https://i.gyazo.com/31bea66f731c1b37698236fb42b69550.gif">
        <h4>画像プレビュー（複数枚投稿可能）</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>file_fieldを用いた画像アップロード</li>
            <li>Active Storageを使用しています</li>
            <li>JSでアップロードファイルを取得し、プレビューを表示しています</li>
            <li>exif.jsで画像の向きを取得し、表示方向を調整しています</li>
            <li>「リセットアップロード」を押すことで、アップロードをリセットできます</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '7'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>商品出品</h2>
      <div class="explains">
        <img src="../../assets/skills/mercari/list1.png">
        <h4>商品出品（上部）</h4>
        <img src="../../assets/skills/mercari/list2.png">
        <h4>商品出品（下部）</h4>
        <p class="explain">
          <a href="http://52.199.29.90/products/new" target="_blank">http://52.199.29.90/products/new</a>
          <ul style="list-style: disc;">
            <li>ログイン後、上記リンクから商品出品ページへ遷移できます</li>
            <li>全ての必須項目を入力していただくと、出品が可能です</li>
            <li>バリデーションによるエラーメッセージが表示されます</li>
            <li>任意項目のブランドの保存には、メソッド"find_or_create_by"を使用しています</li>
            <li>ブランドテーブルに既存レコードがあればそのレコードを参照し、ない場合には新たにレコードを作成します</li>
            <li>出品者情報（ユーザーテーブルのid）も同時に保存されます</li>
          </ul>
        </p>
        <div class="close" @click="showModal = false">
          CLOSE
        </div>
      </div>
    </div>
    <div v-if="showModal == '8'" @close="showModal = false" :key="1" class="modal">
      <hr>
      <h2>商品編集</h2>
      <div class="explains">
        <img src="../../assets/skills/mercari/edit1.png">
        <h4>商品編集（上部）</h4>
        <img src="../../assets/skills/mercari/edit2.png">
        <h4>商品編集（下部）</h4>
        <p class="explain">
          <ul style="list-style: disc;">
            <li>ログイン後、マイページのサイドバー「出品した商品-出品中-」をクリックし商品を選択後、「商品を編集」にてご覧いただけます。もしくはログイン後、http://52.199.29.90/products/出品番号/edit　にてご覧いただけます。</li>
            ※出品番号：出品後、商品詳細ページのURLの数字を入力してください
            <li>画像の削除が可能です（JSを使用しています）</li>
            <ol style="list-style: decimal; padding-left: 1em;">
              <li>削除ボタンが押されたものを"display:hidden"にする</li>
              <li>「更新する」を押した後、JS側でsubmitを一旦止める</li>
              <li>"display:hidden"になっている画像のidを取得し配列化</li>
              <li>取得した画像idの配列をvalueとした"input"タグ（hidden)を生成する</li>
              <li>生成後、本submit</li>
              <li>コントローラで画像idの配列を取得し、そのidを元にDBから対象の画像の紐付けを削除する</li>
            </ol>
            <li>バリデーションによるエラーメッセージが表示されます</li>
          </ul>
          <a href="https://atora1992.hatenablog.com/entry/2019/08/07/181741" target="_blank">関連ブログ記事１</a><br>
          <a href="https://atora1992.hatenablog.com/entry/2019/07/10/201455" target="_blank">関連ブログ記事２</a>
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
    margin: 15% auto 40%;
    padding-bottom: 20px;
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
    padding-bottom: 5%;
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
    font-size: 12px;
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
    width: 80%;
    margin: auto;
    text-align: center;
    z-index: 2;
    position: relative;
    color: white;
  }
  .explains img {
    width: 100%;
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
  .caution {
    font-size: 20px;
    text-align: left;
    width: 80%;
  }
  .close {
    margin: 3% auto 0;
    font-size: 20px;
    border: solid 1px white;
    width: 25%;
    cursor: pointer;
    z-index: 2;
    position: relative;
    background-color: black;
  }

  @media screen and (max-width: 1280px) {
    h1 {
      font-size: 60px;
    }
    h2 {
      font-size: 45px;
    }
    .button {
      font-size: 12px;
    }
    h4, .explain, .close {
      font-size: 20px;
    }
    p {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 50px !important;
    }
    h2 {
      font-size: 35px !important;
    }
    .button {
      font-size: 14px !important;
      width: 40% !important;
    }
    h4, .explain, .close {
      font-size: 15px !important;
    }
    p {
      font-size: 20px !important;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 25px !important;
    }
    h2 {
      font-size: 20px !important;
    }
    .button {
      font-size: 10px !important;
      width: 60% !important;
    }
    h4, .explain, .close {
      font-size: 10px !important;
    }
    p {
      font-size: 10px !important;
    }
  }
</style>