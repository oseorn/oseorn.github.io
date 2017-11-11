var consoleIsVisible = false;
var errorMess = '<span style="color:red">Error</span> : '
var commands = ["register", "hello", "help", "log"];
var commandArgs;
var argsLog = ["e", "l"];
var input;
var consoleLog;

function submitConsole(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure this runs exclusively
        input = document.getElementById('console').value;
        document.getElementById('console-log').style.display = "block";
        analyzeInput(input);
        document.getElementById('console').value = "";
    }
}

function analyzeInput(inp) {
  consoleLog = document.getElementById('console-log').innerHTML;

  inp = inp.toLowerCase();
  commandArgs = getArgs(inp);
  var tempA = inp.split(' ');
  inp = tempA[0];

  if (!commands.includes(inp)) {
    document.getElementById('console-log').innerHTML = '<span style="color:red">Error</span> : command not found.';
    //consoleLog = '<span style="color:red">Error</span> : command not found.';
    return;
  }

  switch(inp) {
    case 'register':
    case 'hello':
      document.getElementById('console-log').innerHTML = "Hello !";
      break;
    case 'help':
      helpFunc();
      //document.getElementById('console-log').innerHTML = "No help as of yet !";
      break;
    case 'log':
      logFunc(commandArgs);
      break;
  }
}

function logFunc(args) {
  for (var i=0; i < args.length; i++) {
    if (!argsLog.includes(args[i])) {
      document.getElementById('console-log').innerHTML = errorMess + '"' + args[i] + '" is not an argument';
    }
  }

  for (var i=0; i < args.length; i++) {
    switch(args[i]) {
      case 'e':
        document.getElementById('console-log').innerHTML = "e is an argument";
        break;
      case 'l':
        document.getElementById('console-log').innerHTML = "l is an argument";
        break;
    }
  }
}

function helpFunc() {
  var comString = '<span style="text-decoration:underline;color:white">Available commands :</span> ';
  for(var i = 0; i < commands.length; i++) {
    comString += commands[i] + " ";
  }
  document.getElementById('console-log').innerHTML = comString;
}

function getArgs(com) {
  var args = com.split(' ');
  args.splice(0,1);
  return args;
}
