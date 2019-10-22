<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home | Periodic-Table</title>
    <link rel="icon" href="../assets/logo/logo.png" type="image/png">
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/fontawesome.min.css">
    <link rel="stylesheet" href="../css/solid.min.css">
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <!-- navbar -->
    <nav class="navbar navbar-light bg-light navbar-expand-lg pr-2">
        <a class="navbar-brand" href="index.php">
            <img src="../assets/logo/logo.png" width="30" height="30" alt="Periodic-Table's logo" class="mr-1">
            Periodic-Table
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.php">Home</a>
                </li>
            </ul>
            <!-- search -->
            <form class="form-inline">
                <div class="input-group">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search">
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
                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-us mr-2"></span>English<i
                                class="fas fa-check text-success ml-1"></i>
                        </a>
                        <a class="dropdown-item" href="#"><span class="flag-icon flag-icon-th mr-2"></span>Thai</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>

    <!-- content -->
    <div class="container-fluid">
        <div id="pt-table">

        </div>
    </div>
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script src="../js/popper.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/fontawesome.min.js"></script>
    <script src="../js/solid.min.js"></script>
</body>

</html>