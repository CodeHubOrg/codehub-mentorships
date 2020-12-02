<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
</head>
<body>
    @yield('content')
</body>
<script>
  const menu = document.getElementById('menu');
  const toggle = () => menu.classList.toggle("hidden");
</script>
</html>
