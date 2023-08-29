<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Price Calculator</title>
</head>
<body>
    <h1>Website Price Calculator</h1>
    <form id="calculator">
        <label for="pages">Number of Pages:</label>
        <input type="number" id="pages" min="1" step="1" required>

        <label for="features">Number of Features:</label>
        <input type="number" id="features" min="0" step="1" required>

        <label for="design">Custom Design:</label>
        <select id="design">
            <option value="0">No</option>
            <option value="500">Yes (+$500)</option>
        </select>

        <label for="maintenance">Maintenance Package:</label>
        <select id="maintenance">
            <option value="0">No</option>
            <option value="100">Yes (+$100/month)</option>
        </select>

        <button type="button" id="calculate">Calculate Price</button>
    </form>
    <div id="total"></div>
    <script src="script.js"></script>
</body>
</html>
