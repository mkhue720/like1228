<div id="layout-wrapper">
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO d-none d-md-block -->
                <div class="navbar-brand-box">
                    <a href="/" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="<?=$settings_logo;?>" alt="" height="22">
                        </span>
                        <span class="logo-lg">
                            <span style="color:black;font-weight: bold;font-size: 20px;"><?=$settings_name;?></span>
                        </span>
                    </a>
                </div>
                <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect"
                    id="vertical-menu-btn">
                    <i class="mdi mdi-backburger"></i>
                </button>
            </div>
            <div class="d-flex">
                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="font-weight: bold;">
                        <img class="rounded-circle header-profile-user"
                            src="https://graph.facebook.com/<?=$user_facebook;?>/picture?width=500&height=500&access_token=2712477385668128|b429aeb53369951d411e1cae8e810640"
                            alt="Header Avatar">
                        <span class="d-none d-sm-inline-block ml-1"><?=$user_username;?> -
                            <?=number_format($user_point);?> VND</span>
                        <i class="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="/thong-tin">
                            <i class="mdi mdi-face-profile font-size-16 align-middle mr-1"></i> Thông tin
                        </a>
                        <a class="dropdown-item" href="/nap-tien">
                            <i class="mdi mdi-credit-card-outline font-size-16 align-middle mr-1"></i> Nạp tiền
                        </a>
                        <a class="dropdown-item" href="/nap-the">
                            <i class="mdi mdi-credit-card-outline font-size-16 align-middle mr-1"></i> Nạp thẻ trực tiếp
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/dang-xuat">
                            <i class="mdi mdi-logout font-size-16 align-middle mr-1"></i> Đăng xuất
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="vertical-menu">
        <div data-simplebar class="h-100">
            <div id="sidebar-menu">
                <ul class="metismenu list-unstyled" id="side-menu">
                    <li class="menu-title">Menu</li>

                    <li>
                        <a href="/" class="waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/navbar/home.png" class="menu-img" alt="">
                            </div>
                            <span>Trang chủ</span>
                        </a>
                    </li>

                    <li>
                        <a href="/site_ctv" class=" waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/navbar/ctv.png" class="menu-img" alt="">
                            </div>
                            <span>Tích hợp Web CTV</span>
                        </a>
                    </li>

                    <li>
                        <a href="/bang-gia" class=" waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/navbar/price.png" class="menu-img" alt="">
                            </div>
                            <span>Bảng giá dịch vụ</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/navbar/user.png" class="menu-img" alt="">
                            </div>
                            <span>Tài khoản</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li>
                                <a href="/thong-tin">
                                    Thông tin
                                </a>
                            </li>
                            <li>
                                <a href="/nap-tien">
                                    Nạp tiền
                                </a>
                            </li>
                            <li>
                                <a href="/nap-the">
                                    Nạp thẻ trực tiếp
                                </a>
                            </li>
                            <li>
                                <a href="/lich-su">
                                    Lịch sử hoạt động
                                </a>
                            </li>
                        </ul>
                    </li>


                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/service/facebook_vip.png" class="menu-img" alt="">
                            </div>
                            <span>Facebook VIP</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li>
                                <a href="/vip-like-clone-facebook">
                                    VIP Like Clone
                                </a>
                            </li>
                            <li>
                                <a href="/vip-like-avatar-facebook">
                                    VIP Like Avatar
                                </a>
                            </li>
                            <li>
                                <a href="/vip-like-fast-facebook">
                                    VIP Like Nhanh
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/service/facebook.png" class="menu-img" alt="">
                            </div>
                            <span>Facebook Buff</span>
                        </a>
                        <ul class="sub-menu mm-collapse" aria-expanded="false">
                            <li>
                                <a href="/buff-like-facebook">
                                    Buff Like
                                </a>
                            </li>
                            <li>
                                <a href="/buff-comment-facebook">
                                    Buff Bình Luận
                                </a>
                            </li>
                            <li>
                                <a href="/buff-share-facebook">
                                    Buff Chia Sẻ
                                </a>
                            </li>
                            <li>
                                <a href="/buff-follows-facebook">
                                    Buff Theo Dõi
                                </a>
                            </li>
                            <li>
                                <a href="/buff-review-fanpage-facebook">
                                    Buff Review Fanpage
                                </a>
                            </li>
                            <li>
                                <a href="/buff-like-fanpage-facebook ">
                                    Buff Like Fanpage
                                </a>
                            </li>
                            <li>
                                <a href="/buff_eye_live_stream_facebook">
                                    Buff Mắt Live Stream
                                </a>
                            </li>
                            <li>
                                <a href="/buff_view_video_facebook">
                                    Buff View Video
                                </a>
                            </li>
                            <li>
                                <a href="/buff_like_clone_facebook">
                                    Buff Like Clone
                                </a>
                            </li>
                        </ul>
                    </li>

                    <?php if ($user_level == 4) { ?>
                    <li class="menu-title">Quản lý</li>
                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/service/facebook/review_fanpage.png" class="menu-img" alt="">
                            </div>
                            <span>Quản lí</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li>
                                <a href="/cai-dat">
                                    Cài đặt
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-thanh-vien">
                                    Danh sách thành viên
                                </a>
                            </li>
                            <li>
                                <a href="/cong-tien-thanh-vien">
                                    Cộng, trừ tiền thành viên
                                </a>
                            </li>
                            <li>
                                <a href="/them-ngan-hang">
                                    Thêm ngân hàng
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-ngan-hang">
                                    Danh sách ngân hàng
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/graphic6.png" class="menu-img" alt="">
                            </div>
                            <span>Quản lí dịch vụ</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li>
                                <a href="/them-dich-vu">
                                    Thêm dịch vụ
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-dich-vu">
                                    Danh sách dịch vụ
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/service/facebook_vip.png" class="menu-img" alt="">
                            </div>
                            <span>Danh sách Vip Like</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li>
                                <a href="/danh-sach-vip-like-clone-facebook">
                                    Vip Like Clone
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-vip-like-avatar-facebook">
                                    Vip Like Avatar
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-vip-like-fast-facebook">
                                    VIP Like Nhanh
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="has-arrow waves-effect">
                            <div class="d-inline-block icons-sm mr-1">
                                <img src="/views/v1/images/icon/service/facebook.png" class="menu-img" alt="">
                            </div>
                            <span>Danh sách Buff Like</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li>
                                <a href="/danh-sach-buff-like-facebook">
                                    Buff Like
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-buff-comment-facebook">
                                    Buff Comment
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-buff-share-facebook">
                                    Buff Share
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-buff-follows-facebook">
                                    Buff Follows
                                </a>
                            </li>
                            <li>
                                <a href="/danh-sach-buff-like-fanpage-facebook">
                                    Buff Like Fanpage
                                </a>
                            </li>
                        </ul>
                    </li>

                    <?php } ?>



                </ul>
            </div>
        </div>
    </div>
    <div class="main-content">