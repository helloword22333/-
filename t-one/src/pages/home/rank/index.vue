<template>
   <div class="rank">
            <div class="tab">
                <div class="tab-tit clearfix">
                    <a href="javascript:;" class="on">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">热卖排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">特价排行</p>
                    </a>
                    <a href="javascript:;">
                        <p class="img">
                            <i></i>
                        </p>
                        <p class="text">新品排行</p>
                    </a>
                </div>

            </div>
            <div class="content">
                <ul>
                    <li>
                        <div class="img-item" id="one">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/iphone14.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【送上满满爱意】iPhone14Pro系列领券立减800元，加129元立得20W原装快充头！！！</a>
                                </div>
                                <p class="info-price">价格：¥9799.00</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/pc.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">酷睿i9十四核20线程处理器丨搭载满血版RTX3060-6G游戏系光追显卡丨高刷高分屏臻享各种体验</a>
                                </div>
                                <p class="info-price">价格：￥9101</p>
                            </div>
                        </div>
                        <div class="img-item">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/xianka.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">彩虹（COLORFUL） RTX4090/4080台式组装电脑游戏电竞独立显卡 RTX</a>
                                </div>
                                <p class="info-price">价格：¥18900.00</p>
                            </div>
                        </div>
                        <div class="img-item" id="tap">
                            <p class="tab-pic">
                                <a href="#">
                                    <img src="./images/router.jpg" />
                                </a>
                            </p>
                            <div class="tab-info">
                                <div class="info-title">
                                    <a href="#">【【限时抢购】TP-LINK新品AX6000高速双频双千兆/游戏专用口专属加速/双频8流超强覆盖/易展一键互联!</a>
                                </div>
                                <p class="info-price">价格：¥221</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.rank {
        width: 1200px;
        margin: 0px auto;

        .tab {
            margin: 0 auto;
            overflow: hidden;
            width: 312px;

            .tab-tit {
                text-align: center;

                a {
                    display: block;
                    padding: 0 18px;
                    float: left;
                    text-decoration: none;
                    font-size: 16px;
                    color: #999;

                    p {
                        margin: 5px 0;
                    }

                    .img {
                        i {
                            width: 35px;
                            height: 35px;
                            display: block;
                            background: url(./images/bg0.png);
                            margin-left: 10px;
                        }
                    }

                    .text {
                        line-height: 28px;
                    }
                }

                .on {
                    color: #e60012;

                    .img {
                        i {
                            background-position: -35px 0;
                        }
                    }
                }
            }
        }

        .content {
            overflow: hidden;
            padding: 10px;

            ul {
                li {
                    overflow: hidden;
                    list-style: none;
                    line-height: 18px;

                    .img-item {
                       
                        width: 269px;
                        float: left;
                        overflow: hidden;
                        margin: 1px 12px 10px;
                        background: #fff;

                        .tab-pic {
                            width: 230px;
                            height: 210px;
                            overflow: hidden;
                            text-align: center;
                            margin: 5px auto 18px;

                            a {
                                img {
                                    width: 200px;
                                    height: 200px;
                                }
                            }
                        }

                        .tab-info {
                            background: #fafafa;

                            .info-title {
                                height: 50px;
                                line-height: 28px;
                                overflow: hidden;
                                margin: 0 auto;
                                padding-left: 10px;

                                a {
                                    color: #333;
                                    text-decoration: none;
                                }
                            }

                            .info-price {
                                font-size: 20px;
                                color: #e1251b;
                                height: 35px;
                                padding-left: 10px;
                                display: block;
                                line-height: 24px;
                                margin: 10px auto 0;
                            }
                        }
                    }
                    .img-item:hover{ 
                        
                        outline: 1px solid #e1251b;
                    }
                }
            }
        }
    }
@media screen and (max-width: 1100px){
   
    #tap{
        display:none
    }
    #one{
        margin-left: 3%;
    }
}
</style>