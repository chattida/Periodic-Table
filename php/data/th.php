<?php
    $json_file = file_get_contents('./data/elements_th.json');
    $json_data = json_decode($json_file, true);
    $id = (int) $_GET['id'] - 1;
    $id_ = $id + 1;
    if ($id_ > 118 || $id_ < 1) {
        redirect("../../index.php");
    }

    function redirect($url) {
        ob_start();
        while (ob_get_status()) {
            ob_end_clean();
        }
        header( "Location: $url" );
    }
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo($json_data[$id]['Element'] . " | ตารางธาตุ"); ?></title>
    <link rel="icon" href="../assets/logo/logo.png" type="image/png">
    <!-- ios -->
    <meta name="apple-mobile-web-app-title" content="<?php echo($json_data[$id]['Element'] . " | ตารางธาตุ"); ?>">
    <link rel="apple-touch-icon" href="../assets/logo/logo.png">
    <!-- css -->
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/fontawesome.min.css">
    <link rel="stylesheet" href="../css/solid.min.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <!-- navbar -->
    <nav class="navbar navbar-light bg-light navbar-expand-lg pr-2">
        <a class="navbar-brand" href="index.php">
            <img src="../assets/logo/logo.png" width="30" height="30" alt="โลโก้เว็บไซต์ ตารางธาตุ" class="mr-1">
            ตารางธาตุ
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.php">หน้าหลัก</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="list.php">ธาตุ</a>
                </li>
            </ul>
            <!-- search -->
            <form class="form-inline">
                <div class="input-group">
                    <input class="form-control" type="search" placeholder="ค้นหา" aria-label="Search">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </form>
            <!-- language -->
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle ml-1" href="#" id="dropdownLanguage" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-globe-americas"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right mt-2" aria-labelledby="dropdownLanguage">
                        <a class="dropdown-item" <?php echo("href=\"./php/change.php?lang=en&path=data&id={$id_}\"") ?>><span
                                class="flag-icon flag-icon-us mr-2"></span>อังกฤษ</a>
                        <a class="dropdown-item" <?php echo("href=\"./php/change.php?lang=th&path=data&id={$id_}\"") ?>><span
                                class="flag-icon flag-icon-th mr-2"></span>ไทย<i
                                class="fas fa-check text-success ml-1"></i></a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <!-- content -->
    <div class="container-fluid">
        <div class="text-center my-4 mx-2">
    <?php
        echo("
            <h1>{$json_data[$id]['Element']} ({$json_data[$id]['Symbol']})</h1>
            <h4>เลขอะตอม: {$json_data[$id]['AtomicNumber']}</h4>
            <h5>หมู่: {$json_data[$id]['Group']} | คาบ: {$json_data[$id]['Period']}</h5>
            <h5>มวลอะตอม: {$json_data[$id]['AtomicMass']}</h5>
        ");
    ?>
        </div>
    </div>

    <!-- script -->
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/fontawesome.min.js"></script>
    <script src="../js/solid.min.js"></script>
    <script src="../js/myScript/table.js"></script>
</body>

</html>