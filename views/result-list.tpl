<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>fe-note</title>
<style type="text/css">
  li {
    line-height: 2;
  }
</style>
</head>
<body>
<h1>Result List</h1>
<ul>
  {% for result in resultList %}
    <li>
      {{ result }}
    </li>
  {% endfor %}
</ul>
</body>
</html>