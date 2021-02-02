<template>
  <nav class="navbar navbar-expand-md navbar-light header">
    <div class="header-container">
      <ul class="header-left">
        <li>
          <a class="header-icon" href="http://127.0.0.1:8000">Oiita</a>
        </li>
        <li>
          <div class="header-community">
            <!-- <a href="#" class="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">コミュニティ</a> -->
          </div>
        </li>
        <li>
          <div class="search-warapper">
            <form
              class="form-inline my-2 my-lg-0 ml-2 search-form"
              action="http://127.0.0.1:8000/posts"
              method="GET"
            >
              <i class="fas fa-search"></i>
              <input
                type="search"
                name="search"
                class="search-form__input"
                placeholder="キーワードを入力"
                aria-label="検索..."
              />
            </form>
          </div>
        </li>
      </ul>
      <ul class="header-right">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Right Side Of Navbar -->
          <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
            <li class="nav-item">
              <a class="registar-btn" href="http://127.0.0.1:8000/register">ユーザー登録</a>
            </li>
            <li class="nav-item">
              <a class href="http://127.0.0.1:8000/login">ログイン</a>
            </li>
            <li class="nav-item">
              <form method="POST" action="http://127.0.0.1:8000/login">
                <input type="hidden" name="_token" value="VnO2HmurDhmcOhm21MN64JYIU6CbvwHrlMvksLB0" />
                <input type="hidden" name="email" value="test@test" />
                <input type="hidden" name="password" value="test1234" />
                <input type="submit" class="submit" value="テストユーザー" />
              </form>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </nav>
</template>