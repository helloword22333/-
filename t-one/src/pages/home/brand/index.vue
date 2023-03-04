<template>
    <div class="brand">
            <div class="py-container">
                <ul class="brand-list">
                    <li class="brand-item">
                        <img src="./image/brand_21.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_03.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_05.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_07.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_09.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_11.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_13.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_15.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_17.png" />
                    </li>
                    <li class="brand-item">
                        <img src="./image/brand_19.png" />
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style  lang="less">

.brand {
        margin: 10px 0;

        .py-container {
            width: 1200px;
            margin: 0 auto;

            .brand-list {
                overflow: hidden;
                padding: 15px 0;
                background: #f7f7f7;
                line-height: 18px;

                .brand-item {
                    width: 120px;
                    float: left;
                    height: 37px;

                    img {
                        border-left: 1px dotted #ccc;
                        padding: 0 10px;
                    }

                    &:first-child {
                        img {
                            border-left: 0;
                        }
                    }
                }
            }
        }
    }
@media screen and(max-width: 1100px){
    .brand-list li:nth-of-type(10), .brand-list li:nth-of-type(9){
        display: none;
    }
    .brand-list li:nth-of-type(1){
        margin-left: 3%;
    }
}
</style>