<?php
$result = mysqli_query($conn,"SELECT * FROM table_service WHERE service_slug = 'buff-like-fanpage-facebook'");
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
                                <img src="/views/v1/images/icon/service/facebook/sub.png" alt=""
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
                                    <label>S??? l?????ng ( <?=$row['service_min_amount']?> ~
                                        <?=$row['service_max_amount']?> )
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
                                                    <span class="amount" data-amount="0">0</span> Like Fanpage v???i gi?? m???i Like Fanpage l?? <span class="rate"
                                                        data-rate="0">0</span> VND / <span class="name">Like Fanpage</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <center>
                                    <button type="button" class="btn btn-dark btn-rounded" id="submit"
                                        onclick="buff_like_fanpage();"><i class="fa fa-plus-circle"></i>
                                        T???o ti???n tr??nh</button>
                                </center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <?php require_once 'buff_like_page_list.php'; ?>
        </div>
    </div>
</div>
<script>
function buff_like_fanpage() {
    var buff_like_facebook = $('#buff_like_facebook').val();
    var buff_like_service = $('#buff_like_service').val();
    var buff_like_content = $('#buff_like_content').val();
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
        url: WEBSITE_URL + prefix + 'service/buff_like_fanpage/',
        type: 'POST',
        dataType: 'JSON',
        data: {
            type: 'buff_like_fanpage',
            buff_like_facebook: buff_like_facebook,
            buff_like_service: buff_like_service,
            buff_like_content: buff_like_content,
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