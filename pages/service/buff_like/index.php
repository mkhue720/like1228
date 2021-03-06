<?php
$result = mysqli_query($conn,"SELECT * FROM table_service WHERE service_slug = 'buff-like-facebook'");
$row = mysqli_fetch_assoc($result);
?>
<div class="page-content">
    <div class="page-title-box"></div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">
                                <img src="/views/v1/images/icon/service/facebook/like.png" alt=""
                                    style="height: 27px;margin-right: 5px;">
                                <?=$row['service_title']?>
                            </h4>

                            <div class="alert alert-info">
                                <?=$row['service_content']?>
                            </div>
                            <form action="" id="service" method="POST">
                                <input type="hidden" id="action" value="buff">
                                <input type="hidden" id="service_config"
                                    value='{"service_point":<?=$row['service_point']?>,"service_min_amount":<?=$row['service_min_amount']?>,"service_max_amount":<?=$row['service_max_amount']?>,"service_warranty":<?=$row['service_warranty']?>,"service_gender":<?=$row['service_gender']?>}'>
                                <input type="hidden" id="service_reaction"
                                    value='{"love":<?=$row['service_reaction_love']?>,"care":<?=$row['service_reaction_care']?>,"haha":<?=$row['service_reaction_haha']?>,"wow":<?=$row['service_reaction_wow']?>,"sad":<?=$row['service_reaction_sad']?>,"angry":<?=$row['service_reaction_angry']?>}'>
                                <input type="hidden" name="type" value="like">
                                <input type="hidden" name="category" value="facebook">
                                <div class="form-group">
                                    <label>ID / Link Facebook :</label>
                                    <input id="buff_like_facebook" type="text" class="form-control"
                                        placeholder="Nh???p ID ho???c Link Facebook" autocomplete="off" required="">
                                </div>

                                <div class="form-group" style="display: none;">
                                    <label>D???ch v??? :</label>
                                    <input id="buff_like_service" type="text" class="form-control"
                                        placeholder="Nh???p d???ch v???" value="<?=$row['service_slug']?>" autocomplete="off"
                                        required="">
                                </div>

                                <div class="form-group">
                                    <label>Ghi ch?? :</label>
                                    <textarea id="buff_like_content" rows="2" class="form-control"
                                        placeholder="Nh???p ghi ch?? cho ti???n tr??nh ho???c b??? tr???ng"></textarea>
                                </div>

                                <div class="form-group">
                                    <label>S??? l?????ng ( <?=number_format($row['service_min_amount']);?> ~
                                        <?=number_format($row['service_max_amount']);?> )
                                        :</label>
                                    <input type="number" class="form-control" name="amount" id="buff_like_amount"
                                        placeholder="Nh???p s??? l?????ng c???n mua" value="<?=$row['service_min_amount']?>"
                                        autofocus="">
                                </div>

                                <div class="form-group">
                                    <label>Lo???i :</label>
                                    <select name="price_type" id="buff_like_type" class="form-control">
                                        <option value="0">Kh??ng b???o h??nh - 70 VND</option>
                                        <option value="1" selected="">B???o h??nh - 95 VND</option>
                                    </select>
                                </div>
                                <style>
                                .box-reactions img {
                                    height: 40px;
                                    margin: 3px;
                                    cursor: pointer;
                                }

                                .box-reactions img.active {
                                    -ms-transform: rotate(-360deg);
                                    -webkit-transform: rotate(-360deg);
                                    transform: rotate(-360deg);
                                    transition-duration: .7s;
                                    border: 2px solid #389AF0;
                                    border-radius: 50%;
                                    padding: 1px;
                                    height: 40px;
                                }
                                </style>
                                <div class="form-group" style="display: none;">
                                    <label>C???m x??c :</label>
                                    <input name="reactions" id="buff_like_reaction" class="form-control"
                                        placeholder="Nh???p ghi ch?? cho ti???n tr??nh ho???c b??? tr???ng" value="like">
                                </div>
                                <div class="form-group">
                                    <label>C???m x??c :</label>
                                    <div class="text-center box-reactions">
                                        <img data-reactions="like" class="active" data-toggle="tooltip" title="Th??ch"
                                            src="/views/v1/images/icon/reactions/like.png" alt="">
                                        <img data-reactions="love" data-toggle="tooltip" title="Y??u th??ch"
                                            src="/views/v1/images/icon/reactions/love.png" alt="">
                                        <img data-reactions="care" data-toggle="tooltip" title="Th????ng th????ng"
                                            src="/views/v1/images/icon/reactions/care.png" alt="">
                                        <img data-reactions="haha" data-toggle="tooltip" title="C?????i l???n"
                                            src="/views/v1/images/icon/reactions/haha.png" alt="">
                                        <img data-reactions="wow" data-toggle="tooltip" title="Ng???c nhi??n"
                                            src="/views/v1/images/icon/reactions/wow.png" alt="">
                                        <img data-reactions="sad" data-toggle="tooltip" title="Bu???n"
                                            src="/views/v1/images/icon/reactions/sad.png" alt="">
                                        <img data-reactions="angry" data-toggle="tooltip" title="Gi???n d???"
                                            src="/views/v1/images/icon/reactions/angry.png" alt="">
                                    </div>
                                </div>

                                <div class="form-group" style="display: none;">
                                    <label>Gi???i t??nh :</label>
                                    <input name="gender" id="buff_like_gender" class="form-control"
                                        placeholder="Nh???p ghi ch?? cho ti???n tr??nh ho???c b??? tr???ng" value="all">
                                </div>
                                <div class="form-group">
                                    <label>L???c gi???i t??nh ( Ph?? 20% ) :</label>
                                    <div class="row text-center s-gender" style="font-weight: bold;">
                                        <div class="col-lg-4 gd">
                                            <button type="button" data-gender="male"
                                                class="btn btn-default btn-sm btn-rounded waves-effect btn-block border-purple">
                                                <img src="/views/v1/images/icon/gender/male.png" alt=""
                                                    style="height: 25px;">
                                                Nam
                                            </button>
                                        </div>
                                        <div class="col-lg-4 gd">
                                            <button type="button" data-gender="female"
                                                class="btn btn-default btn-sm btn-rounded waves-effect btn-block border-purple">
                                                <img src="/views/v1/images/icon/gender/female.png" alt=""
                                                    style="height: 25px;">
                                                N???
                                            </button>
                                        </div>
                                        <div class="col-lg-4 gd">
                                            <button type="button" data-gender="all"
                                                class="btn btn-info btn-sm btn-rounded waves-effect btn-block">
                                                <img src="/views/v1/images/icon/gender/all.png" alt=""
                                                    style="height: 25px;">
                                                T???t c???
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-12">
                                        <div class="card box-static bg-main">
                                            <div class="card-body">
                                                <span class="text">T???NG THANH TO??N</span> <br>
                                                <span class="number total_price" data-price="0">0</span>
                                                <span class="number">VND</span> <br>
                                                <span class="text pretext"
                                                    style="font-size: 14px;letter-spacing: 2px;">B???n s??? t??ng
                                                    <span class="amount" data-amount="0">0</span> Like v???i gi?? m???i Like
                                                    Vi???t l?? <span class="rate" data-rate="0">0</span> VND / Like</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="buff_like();"><i class="fa fa-plus-circle"></i>
                                        T???o ti???n tr??nh</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php require_once 'buff_like_list.php'; ?>
        </div>
    </div>
</div>
<script>
function buff_like() {
    var buff_like_facebook = $('#buff_like_facebook').val();
    var buff_like_service = $('#buff_like_service').val();
    var buff_like_content = $('#buff_like_content').val();
    var buff_like_reaction = $('#buff_like_reaction').val();
    var buff_like_amount = $('#buff_like_amount').val();
    var buff_like_type = $('#buff_like_type').val();
    var buff_like_gender = $('#buff_like_gender').val();
    if (!buff_like_facebook) {
        swalalert("Vui l??ng nh???p ID Facebook", "info");
        return;
    }
    if (!buff_like_service) {
        swalalert("Vui l??ng nh???p d???ch v???", "info");
        return;
    }
    if (!buff_like_content) {
        swalalert("Vui l??ng nh???p c???m x??c", "info");
        return;
    }
    if (!buff_like_reaction) {
        swalalert("Vui l??ng s??? l?????ng", "info");
        return;
    }
    if (!buff_like_amount) {
        swalalert("Vui l??ng nh???p n???i dung", "info");
        return;
    }
    if (!buff_like_type) {
        swalalert("Vui l??ng nh???p s??? l?????ng b??i vi???t", "info");
        return;
    }
    if (!buff_like_gender) {
        swalalert("Vui l??ng nh???p s??? l?????ng b??i vi???t", "info");
        return;
    }
    $.ajax({
        url: WEBSITE_URL + prefix + 'service/buff_like/',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'buff_like',
            buff_like_facebook: buff_like_facebook,
            buff_like_service: buff_like_service,
            buff_like_content: buff_like_content,
            buff_like_reaction: buff_like_reaction,
            buff_like_amount: buff_like_amount,
            buff_like_type: buff_like_type,
            buff_like_gender: buff_like_gender
        },
        beforeSend: function() {
            wait('#submit', false);
        },
        complete: function() {
            wait('#submit', true, '<i class="fa fa-plus-circle"></i> T???o ti???n tr??nh');
        },
        success: (data) => {
            if (data.error) {
                swalalert(data.msg, "error");
            } else {
                swalalert(data.msg, "success");
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
        }
    })
}
</script>