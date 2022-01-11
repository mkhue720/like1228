<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="content-language" content="vi">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title><?=$settings_title;?></title>
    <link rel="shortcut icon" href="/views/v1/images/icon/service/facebook.png">
    <meta name="type" content="website">
    <meta name="title" content="<?=$settings_title;?>">
    <meta name="description"
        content="<?=$settings_keyword;?>">
    <meta name="locale" content="vi_VN">
    <meta name="image" content="https://likeviet.xyz/views/v1/images/graphic1.png">
    <meta name="author" content="hoanghjx">
    <meta name="keywords" content="dich vu, he thong dich vu, dich vu mang xa hoi, social service">
    <meta property="og:url" content="https://likeviet.xyz">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?=$settings_title;?>">
    <meta property="og:description"
        content="<?=$settings_keyword;?>">
    <meta property="og:locale" content="vi_VN">
    <meta property="og:image" content="https://likeviet.xyz/views/v1/images/graphic1.png">
    <link rel="stylesheet" href="/views/v1/assets/css/styles.css" type="text/css" />
    <script src="/views/v1/assets/toastr/toastr.css"></script>
    <script src="/views/v1/assets/libs/jquery/jquery.min.js"></script>
    <script type="text/javascript">
    const WEBSITE_URL = '<?=$settings_domain;?>',
        prefix = 'modun/';
    </script>
</head>
<style>
body[data-topbar=colored] #page-topbar {
    background-color: #389AF0
}

.page-title-box {
    background-color: #389AF0;
    padding: 5px 12px 65px 12px
}

.form-control:focus {
    border: 1px solid #389AF0
}

.bg-main {
    background-color: #389AF0 !important
}

body[data-topbar=colored] .dropdown.show .header-item {
    background-color: #389AF0
}

#sidebar-menu ul li a .uim-svg {
    fill: #389AF0 !important
}

.mm-active {
    color: #389AF0 !important
}

.mm-active .active {
    color: #389AF0 !important
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff;
    background-color: #389AF0
}

.vertical-collpsed .vertical-menu #sidebar-menu>ul>li:hover>a {
    color: #389AF0;
    font-weight: 700
}

.box-price-service {
    text-align: center;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
    color: #1fab89;
    background-color: #bcffdc;
    border-radius: 50px
}

.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #389AF0;
    border-color: #389AF0
}

.menu-img {
    height: 17px;
    margin: 4px;
    padding-left: 3px;
    display: inline-block
}

.bank-style {
    border-radius: 20px;
    border: 2px solid #389AF0;
    padding: 15px
}

.box-service-panel {
    border: 1.2px solid #389AF0;
    border-radius: 10px
}

.box-service-panel:hover {
    border: 2px solid #389AF0;
    animation: shake .82s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px
}

.service-text {
    padding-top: 12px;
    font-weight: 600;
    color: #3a3a3a;
    box-sizing: border-box
}

.box-service-panel img {
    height: 40px;
    margin-bottom: 12px
}

@keyframes shake {

    10%,
    90% {
        transform: translate3d(-1px, 0, 0)
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0)
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0)
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0)
    }
}
</style>
<?php if ($duysexy == true) { ?>
<body data-topbar="colored">
<?php } else { ?>
<body class="bg-main bg-pattern">
<?php } ?>