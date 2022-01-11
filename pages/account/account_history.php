<div class="page-content">
    <div class="page-title-box"></div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="header-title">Lịch sử hoạt động</h4> <br>
                            <div class="table-responsive">
                                <table class="dataTable text-center table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Hoạt động</th>
                                            <th>Biến động số dư</th>
                                            <th>Số dư</th>
                                            <th>Địa chỉ IP</th>
                                            <th>Thời gian</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php 
                                        $result = mysqli_query($conn,"SELECT * FROM table_history_buy WHERE history_buy_username = '$user_username' ORDER BY history_buy_id DESC LIMIT 0,15");
                                        while($row = mysqli_fetch_assoc($result)){
                                        ?>
                                        <tr>
                                            <td><?=$row['history_buy_id']?></td>
                                            <td><?=$row['history_buy_content']?></td>
                                            <td><?=number_format($row['history_buy_point'])?> VND</td>
                                            <td><?=number_format($row['history_buy_balance'])?> VND</td>
                                            <td><?=$row['history_buy_ip']?></td>
                                            <td><?=date('d-m-Y', $row['history_buy_time'])?></td>
                                        </tr>
                                        <?php } ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>