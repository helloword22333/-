<template>
   <div class="like">
            <div class="py-container">
                <div class="title">
                    <h3 class="fl">猜你喜欢</h3>
                    <a href="javascript:;" class="fr tip changeBnt">换一换</a>
                </div>
                <div class="bd">
                    <ul class="favourate">
                        <li id="one">
                            <img src="./image/like_4.jpg" alt="" />
                            <div class="like-text">
                                <p>魅族 18s 8GB+128GB 渡海 5G 骁龙888+ 36W ...</p>
                                <h3>¥2640.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./image/like_03.png" alt="" />
                            <div class="like-text">
                                <p>时尚新款雨伞 自动伞 经典款式</p>
                                <h3>¥36.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./image/like_01.png" alt="" />
                            <div class="like-text">
                                <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                                <h3>¥116.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./image/like_02.png" alt="" />
                            <div class="like-text">
                                <p>优品质不锈钢好锅 采用进口好材质 50年品质值得...</p>
                                <h3>¥106.00</h3>
                            </div>
                        </li>
                        <li>
                            <img src="./image/like_5.jpg" alt="" />
                            <div class="like-text">
                                <p>瑞士莲 Lindt 进口软心巧克力乐享装500g约38粒 ...</p>
                                <h3>¥131.00</h3>
                            </div>
                        </li>
                        <li id="last">
                            <img src="./image/like_6.jpg" alt="" />
                            <div class="like-text">
                                <p>歌帝梵(GODIVA)臻粹巧克力礼盒精选20颗装200g...</p>
                                <h3>¥151.00</h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.like {
        margin-top: 15px;

        .py-container {
            width: 1200px;
            margin: 0 auto;

            .title {
                overflow: hidden;

                .fl {
                    float: left;
                    font-size: 20px;
                    line-height: 30px;
                }

                .fr {
                    float: right;
                    background-image: url(./image/icons.png);
                    width: 66px;
                    height: 25px;
                    background-position: 182px -104px;
                    line-height: 30px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #666;
                    text-decoration: none;
                }
            }

            .bd {
                .favourate {
                    border: 1px solid #e4e4e4;
                    overflow: hidden;
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: flex;

                    li {
                        height: 250px;
                        margin: 0 -1px;
                        overflow: hidden;
                        background: #fff;
                        position: relative;
                        width: 16.667%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;

                        img {
                            width: 142px;
                            height: 142px;
                            transition: all 400ms;

                            &:hover {
                                opacity: 0.8;
                                transform: scale(1.1)
                            }
                        }

                        .like-text {
                            padding: 0;
                            width: 142px;
                            border-right: 1px solid #e4e4e4;

                            p {
                                margin: 5px 0;
                            }

                            h3 {
                                color: #df3033;
                                font-size: 20px;
                                line-height: 30px;
                                margin: 9px 0;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width:1100px){
        #one{
            margin-left: 3%;
        }
        #last{
            display: none;
        }
    }
</style>