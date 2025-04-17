<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SVG Text Editor</title>
  <link rel="stylesheet" href="assets/plugins/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body class="bg-light">

  <div class="container py-5">
    <h2 class="text-center mb-4">Greeting Card Editor</h2>

    <div class="row">
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">Text Options</h5>

            <div class="mb-3">
                <button id="addTextBtn" class="btn btn-success w-100 mt-2">Add Text</button>
            </div>

          </div>
        </div>
      </div>

      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-body text-center">
            <svg id="svgCanvas" width="600" height="400" class="border" style="cursor: crosshair;">
              <image href="assets/images/demo1.jpg" x="0" y="0" width="600" height="400" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="assets/plugins/jquery/jquery.min.js"></script>
  <script src="assets/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>