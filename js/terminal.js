// terminal.js
let hasCleared = false;

const helpMap = {
  'whoami': 'Show my name.',
  'id': 'Print my major information.',
  'pwd': 'Print name of current college.',
  'ps': 'Report a snapshot of work experience.',
  'ls': 'List links to notable Github projects.',
  'locale': 'Get known programming languages.',
  'clear': 'Clear the terminal.',
  'help': 'Show this help dialog.'
}

let tableContents = '';
for (let command in helpMap) {
  tableContents += '<tr>' +
    '<td style="width: 10em; vertical-align: top;"><b>' + command + ':</b></td>' +
    '<td>' + helpMap[command] + '</td>' +
    '</tr>';
}

const projects = {
  'NEAT AI for Dino Run': 'https://github.com/defCoding/NEAT-dino-run',
  'Teaching Helper Discord Bot': 'https://github.com/defCoding/bot-TA-discord',
  'Sorting Algorithms Visualizer': 'https://github.com/defCoding/sort-visualizer'
}

$('#terminal-container > div').terminal({
  help: function() {
    const table = $('<table>' + tableContents + '</table>');
    this.echo(table);
  },
  whoami: function() {
    this.echo('Kevin Cao');
  },
  id: function() {
    this.echo('major=998(Computer Science)   spec=56(Software Engineering)   minor=42(Mathematics)');
  },
  pwd: function() {
    this.echo('/undergrad/Indiana_University/Bloomington');
  },
  ps: function() {
    const table = $('<table>'+
            '<tr>' +
              '<td style="width: 1em; text-align: right;">PID</td>' +
              '<td style="width: 3em;">TTY</td>' +
              '<td style="width: 6em; text-align: right;">TIME</td>' +
              '<td>CMD</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="text-align: right;">1</td>' +
              '<td>?</td>' +
              '<td style="text-align: right;">2020-Now</td>' +
              '<td>IUSG Project Manager</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="text-align: right;">2</td>' +
              '<td>?</td>' +
              '<td style="text-align: right;">2020-Now</td>' +
              '<td>Research Assistant</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="text-align: right;">3</td>' +
              '<td>?</td>' +
              '<td style="text-align: right;">2019-Now</td>' +
              '<td>IU Undergraduate Instructor</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="text-align: right;">4</td>' +
              '<td>?</td>' +
              '<td style="text-align: right;">2019-2020</td>' +
              '<td>IU SICE Tutor</td>' +
            '</tr>' +
            '<tr>' +
              '<td style="text-align: right;">5</td>' +
              '<td>?</td>' +
              '<td style="text-align: right;">2015-Now</td>' +
              '<td>Tokyo Grill IT Support</td>' +
            '</tr>' +
          '</table>');

    this.echo(table);
  },
  locale: function() {
    this.echo('Java\nC\nPython\nRacket\nJavascript\nC#\nGDScript\nSwift\nKotlin');
  },
  ls: function() {
    for (let name in projects) {
      let anchor = $(`<a href=${projects[name]} style='color: var(--classy-blue)' class='nodecor' target='_blank'>${name}</a>`);
      this.echo(anchor);
    }
  }
}, {
  prompt: '[[;#97ff00;]> ]',
  greetings: "Type 'help' for a list of commands.",
  checkArity: true,
  height: 600,
  onAfterCommand: function(command) {
    if (command === 'clear') {
      console.log($);
      this.echo("Type 'help' for a list of commands.");
    }
  },
  keydown: function(e, term) {
    if (e.ctrlKey) {
      return true;
    }
  }
});


