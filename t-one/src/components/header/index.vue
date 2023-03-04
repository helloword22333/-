<template>
  <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>百宝阁欢迎您！</p>
                        <p v-if="!userName">
                            <span>请</span>
                            <router-link  to="/login">登录</router-link>
                            <router-link to="/register" class="register">免费注册</router-link>
                        </p>
                        <p v-else>
                            {{ userName }}
                            <a class="register" @click="logout" info="無聊">退出登錄</a>
                        </p>
                    </div>
                    <div class="typeList">
                        <router-link to="/center/myorder">我的订单</router-link >
                        <router-link to="/shopcar">我的购物车</router-link>
                        <a href="###">我的百宝阁</a>
                        <a href="###">百宝阁会员</a>
                        <a href="###">企业采购</a>
                        <router-link to="/about">关于我们</router-link>
                        <a class="last" href="###">合作招商</a>
                        <a class="last" href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link class="logo" title="尚品汇" to="/home" >
                        <img style="width:100px" src="./image/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea" v-if="!$route.meta.disshowTop">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" @keyup.enter="goSearch" />
                        <button
                         class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch" >
                         搜索
                         </button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
import router from '@/router/router';


export default {
    data() {
        return {
            keyword: ""
        };
    },
    mounted() {
        this.$bus.$on("clear", () => {
            this.keyword = "";
        });
        //得到用戶信息在首頁展示
        try {
            this.$store.dispatch("getUserInfo");
        }
        catch (error) {
            console.log(error);
        }
    },
    computed: {
        userName() {
            return this.$store.state.user.userInfo.name;
        }
    },
    methods: {
        goSearch() {
            // this.$router.push("/search/"+this.keyword+"?kwd="+this.keyword.toUpperCase())
            let location = { name: "search", params: { keyword: this.keyword || "" } };
            if (this.$route.query) {
                location.query = this.$route.query;
            }
            this.$router.push(location);
        },
        async logout() {
            //清除本地存儲的token，通知服務器退出這個用戶，清除項目裏的數據userinfo
            try {
                await this.$store.dispatch("userLogOut");
                //回到首頁
                this.$router.replace("/home");
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    components: { router }
}
</script>

<style scoped lang="less">

.header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;
                
                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
        @media screen and(max-width: 1200px){
            .last{
                display: none;
            }
            .searchArea{
                margin-right: 21%;
            }
            
        }
    }

</style>

