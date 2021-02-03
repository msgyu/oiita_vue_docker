<template>
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
                <a class="post-title" href="http://127.0.0.1:8000/posts/112"
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
    </div>
</template>
