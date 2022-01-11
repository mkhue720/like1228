<div class="page-content">
    <div class="page-title-box"></div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">Thông tin chuyển khoản và nạp tiền</h4> <br>
                            <style>
                            div.content-payment {
                                background-color: #ffedb9;
                                border: 1px solid #ff5858;
                                padding: 7px;
                                border-radius: 10px;
                                font-weight: 500;
                            }
                            </style>

                            <div class="row">
                                <?php 
                                $result = mysqli_query($conn,"SELECT * FROM table_banks WHERE banks_status = 'true' ORDER BY banks_id DESC LIMIT 0,100");
                                while($row = mysqli_fetch_assoc($result)){
                                ?>
                                <div class="col-lg-6">
                                    <div class="card" style="font-weight: bold;">
                                        <div class="bank-style">
                                            <center>
                                                <img src="<?=$row['banks_images'];?>"
                                                    style="height:55px;margin-bottom:7px;margin-top:-3px;">
                                            </center>
                                            <?php if($row['banks_name'] != 'false') { ?>
                                            Ngân hàng: <b class="text-primary"><?=$row['banks_name'];?></b>
                                            <br>
                                            <?php } ?>
                                            <?php if($row['banks_account_holder'] != 'false') { ?>
                                            Chủ tài khoản: <b class="text-primary"><?=$row['banks_account_holder'];?></b>
                                            <br>
                                            <?php } ?>
                                            <?php if($row['banks_number_holder'] != 'false') { ?>
                                            Số tài khoản: <b class="text-danger"><?=$row['banks_number_holder'];?></b>
                                            <br>
                                            <?php } ?>
                                            <?php if($row['banks_branch'] != 'false') { ?>
                                            Chi nhánh: <b class="text-danger"><?=$row['banks_branch'];?></b>
                                            <?php } ?>
                                        </div>
                                    </div>
                                </div>
                                <?php } ?>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <center>
                                        <b style="font-size: 20px;letter-spacing: 1.5px;">NỘI DUNG NẠP
                                            TIỀN</b>
                                    </center>
                                    <div class="card box-static bg-main">
                                        <div class="card-body">
                                            <span class="number content-trans"><?=$user_username;?></span> <br>
                                            <button class="btn btn-dark btn-rounded btn-sm waves-effect btn-copy"
                                                style="margin: 3px;"><i class="fa fa-copy"></i> Sao
                                                chép</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title text-center">Thông báo & hướng dẫn nạp tiền</h4>
                            <center style="padding: -10px;">
                                <img src="/views/v1/images/icon/notification_payment.png" alt="" style="height: 50px;">
                            </center>
                            <p
                                style="background-color: #ffedb9;margin: -12px;padding: 15px;border-radius: 20px;font-weight: bold;color:#389AF0;">
                                NẠP QUA ATM VUI LÒNG LIÊN HỆ ADMIN
                                <br>CHUYỂN KHOẢN ĐÚNG NỘI DUNG ĐỂ ĐƯỢC CỘNG TIỀN NHANH VÀ CHÍNH XÁC NHẤT
                                <br>( SAI NỘI DUNG SẼ MẤT 10% SỐ TIỀN )
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>