function processCode(code, num) {
    num = parseInt(num,10);
    code = parseInt(code,10);
    correct = -1;
    texthtml = "";
    if (num == 1) {
      correct = 8979;
      texthtml = "Will"
    }
    elif (num == 2) {
      correct = 3238;
      texthtml = "Will you"
    }
    elif (num == 3) {
      correct = 4626;
      texthtml = "Will you be"
    }
    elif (num == 4) {
      correct = 4338;
      texthtml = "Will you be my"
    }
    if (code == correct) {
      $('#text').html('');
      html = texthtml;
      $('#text').html(html);

      $('#map').html('');
      html = "<img src=\"images/ngrams/Toys_&_Games_ngram.jpg\">";
      $('#map').html(html);
      
      $('#form').html('');
      html = "<p><form><input type=\"text\" name=\"code\" id=\"code\" placeholder=\"Enter the secret code!\">";
      html += "<input type=\"submit\" value=\"Submit\" onclick=\"processCode1(document.getElementById('code').value,";
      html += String(num + 1) + ")\">";
      html += "</form></p>";
      $('#form').html(html);
    }
    else {
      $('#form').html('12345');
        /*
      $('#form').html('');
      html = <p>"Nice try.<br><form><input type=\"text\" name=\"code\" id=\"code\" placeholder=\"Enter the secret code!\">";
      html += "<input type=\"submit\" value=\"Submit\" onclick=\"processCode1(document.getElementById('code').value,";
      html += String(num + 1) + ")\">";
      html += "</form></p>";
      $('#form').html(html);*/
    }
  }
  
