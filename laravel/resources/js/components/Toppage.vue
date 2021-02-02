<template>
    <main>
        <div id="login-wrapper" class="row">
            <div class="col-7">
                <h1 class="top-heading text-white">
                    <b>How developers code is here.</b>
                </h1>
                <p class="top-heading_text text-white">
                    Oiitaは、エンジニアリングに関する知識を記録・共有するためのサービスです。コードを書いていて気づいたことや、自分がハマったあの仕様について、他のエンジニアと知見を共有しましょう
                    ;)
                </p>
            </div>
            <div class="col-5">
                <form method="POST" action="http://127.0.0.1:8000/login">
                    <input
                        type="hidden"
                        name="_token"
                        value="VnO2HmurDhmcOhm21MN64JYIU6CbvwHrlMvksLB0"
                    />
                    <table>
                        <tbody>
                            <tr>
                                <th>ユーザ名</th>
                                <td>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Oiita"
                                        size="50"
                                        value=""
                                        name="username"
                                        required=""
                                        autofocus=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>メールアドレス</th>
                                <td>
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="oiita@oiita.com"
                                        size="50"
                                        name="email"
                                        required=""
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>パスワード</th>
                                <td>
                                    <input
                                        type="password"
                                        class="form-control"
                                        name="password"
                                        required=""
                                        size="50"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <input
                                        type="submit"
                                        value="ログイン"
                                        class="form-control"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        <div class="top-wrapper">
            
            <div class="posts-wrapper col-md-6">
                <div class="posts-nav">
                    <ul class="posts-nav_ul">
                        <li class="active">
                            <a href="">
                                すべて
                                <span class="badge">201</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/112"
                            >んなもののひびき、丘おかしのようにきも切れず膝ひざにその白。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 128</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/159"
                            >ぬとき出そう思いましたかったのだ。いかんそっちをしたのです。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 108</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/95"
                            >行ってあんなかをおろしているときは川下のまん中がふらふり返。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 105</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/26"
                            >ねのそとを知って」「あれは、ちょう。あなたはジョバンニもカ。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:31</span>
                                <span class="lgtm">LGTM 101</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/37"
                            >なって、ぼく岸きしにつけていました。ジョバンニ、ラッコの上。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:31</span>
                                <span class="lgtm">LGTM 98</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/79"
                            >ら顔をしました。「厭いや）ジョバンニは思わず二人ふたりして。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 92</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/173"
                            >かりのようで、男の子が談はなぜかまえの蓋ふたごのお星さまで。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 91</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/89"
                            >笛くちびるを噛かんでいるのです」窓まどの外を見るとみちを通。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 86</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/99"
                            >いじりなのでしたってくるコルク抜ぬきの通り過すぎようが黄い。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 86</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/166"
                            >るとジョバンニは、ちらから僕ぼくたちは半分はんぶん奇体きた。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 85</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/23"
                            >ょうのだ。みんながら、缶かんしんしゅも下から見てありました。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:31</span>
                                <span class="lgtm">LGTM 84</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/35"
                            >舟ふねの方たちにとってしました。全まって叫さけびました、そ。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:31</span>
                                <span class="lgtm">LGTM 84</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/17"
                            >手りょうかんです。そしてだまって見ました。「どこに紫むらさ。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:31</span>
                                <span class="lgtm">LGTM 81</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/193"
                            >いになるようにカムパネルラの人たちも降おり、黄いろ指図さし。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 81</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/196"
                            >たいあたしかにくれんなに問というふうの花火でいるのでした。。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 81</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/100"
                            >よったわってあいましたら、私たちは水にひざにそよりもしな十。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 79</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/183"
                            >いかけました。「こっちでカムパネルラが、もう黙だまのようせ。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 78</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/34"
                            >んじゃない天鵞絨ビロードを張はっは」と叫さけび、思い切った。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:31</span>
                                <span class="lgtm">LGTM 77</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby on Rails"
                                        >
                                            Ruby on Rails
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/125"
                            >ぎんがの岸きしをこつこつ鳴らしらのに電燈でんとうの向こう側。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 76</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Ruby"
                                        >
                                            Ruby
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post-box">
                    <img
                        class="post-box_left"
                        src="http://127.0.0.1:8000/./img/sample-user.png"
                        alt="ロゴ"
                    />
                    <div class="post-box_right">
                        <a
                            class="post-title"
                            href="http://127.0.0.1:8000/posts/77"
                            >も燃もえてるって、とうの木がほんも行って、手帳てちょうだま。</a
                        >
                        <div class="post-details">
                            <div class="post-details_date">
                                <span>2020-11-12 23:18:32</span>
                                <span class="lgtm">LGTM 75</span>
                            </div>
                            <div class="post-tags" style="display:inline-flex">
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="PHP"
                                        >
                                            PHP
                                        </button>
                                    </form>
                                </div>
                                <div>
                                    <form
                                        action="http://127.0.0.1:8000/posts"
                                        method="GET"
                                    >
                                        <button
                                            class="post-tag"
                                            name="tag_btn"
                                            value="Laravel"
                                        >
                                            Laravel
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="paginate_wrapper">
                    <nav>
                        <ul class="pagination">
                            <li
                                class="page-item disabled"
                                aria-disabled="true"
                                aria-label="« 前へ"
                            >
                                <span class="page-link" aria-hidden="true"
                                    >‹</span
                                >
                            </li>

                            <li class="page-item active" aria-current="page">
                                <span class="page-link">1</span>
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=2"
                                    >2</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=3"
                                    >3</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=4"
                                    >4</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=5"
                                    >5</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=6"
                                    >6</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=7"
                                    >7</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=8"
                                    >8</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=9"
                                    >9</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=10"
                                    >10</a
                                >
                            </li>
                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=11"
                                    >11</a
                                >
                            </li>

                            <li class="page-item">
                                <a
                                    class="page-link"
                                    href="http://127.0.0.1:8000?page=2"
                                    rel="next"
                                    aria-label="次へ »"
                                    >›</a
                                >
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </main>
</template>

<script></script>
