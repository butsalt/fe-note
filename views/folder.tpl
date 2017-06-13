<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>learn</title>
<style type="text/css">
  li {
    line-height: 2;
  }
</style>
</head>
<body>
<h1>Page List</h1>
<ul>
  {% if not isRoot %}
    <li>
      <a href="../">
        ..
      </a>
    </li>
  {% endif %}
  {% for item in pages %}
    <li>
      <a href="./{{ item }}">
        {{ item }}
      </a>
    </li>
  {% endfor %}
</ul>
</body>
</html>