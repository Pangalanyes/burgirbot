"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Require dependencies
var keepAlive = require("./server");

var _require = require('discord.js'),
    Client = _require.Client,
    Intents = _require.Intents;

var dotenv = require('dotenv');

var axios = require('axios'); // Load environment variables


dotenv.config(); // Create a bot instance

var bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
}); // Log our bot in

bot.login(process.env.DISCORD_BOT_TOKEN); // Log to console when bot is ready

function getPlay() {
  var coin, vsCurrency, _ref, data;

  return regeneratorRuntime.async(function getPlay$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          coin = 'plant-vs-undead-token';
          vsCurrency = 'php'; // Get crypto price from coingecko API

          _context.next = 5;
          return regeneratorRuntime.awrap(axios.get("https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=php"));

        case 5:
          _ref = _context.sent;
          data = _ref.data;

          if (data[coin][vsCurrency]) {
            _context.next = 9;
            break;
          }

          throw Error();

        case 9:
          bot.user.setActivity(" PVU = ".concat(data[coin][vsCurrency]), type = 'Watching');
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
}

bot.on('ready', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("".concat(bot.user.username, " is up and running!"));
          getPlay();

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Reply to user messages

bot.on('message', function _callee2(message) {
  var coin, vsCurrency, _ref2, data, _coin, _vsCurrency, _ref3, _data, _coin2, _vsCurrency2, _ref4, _data2, _message$content$spli, _message$content$spli2, command, args, _args3, _coin3, _vsCurrency3, _ref5, _data3;

  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!message.author.bot) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return");

        case 2:
          if (!message.content.startsWith('slp')) {
            _context3.next = 19;
            break;
          }

          getPlay();
          _context3.prev = 4;
          coin = 'smooth-love-potion';
          vsCurrency = 'php'; // Get crypto price from coingecko API

          _context3.next = 9;
          return regeneratorRuntime.awrap(axios.get("https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php"));

        case 9:
          _ref2 = _context3.sent;
          data = _ref2.data;

          if (data[coin][vsCurrency]) {
            _context3.next = 13;
            break;
          }

          throw Error();

        case 13:
          return _context3.abrupt("return", message.reply(" SLP = ".concat(data[coin][vsCurrency])));

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](4);
          console.log(_context3.t0);

        case 19:
          if (!message.content.startsWith('cyt')) {
            _context3.next = 36;
            break;
          }

          getPlay();
          _context3.prev = 21;
          _coin = 'coinary-token';
          _vsCurrency = 'php'; // Get crypto price from coingecko API

          _context3.next = 26;
          return regeneratorRuntime.awrap(axios.get("https://api.coingecko.com/api/v3/simple/price?ids=coinary-token&vs_currencies=php"));

        case 26:
          _ref3 = _context3.sent;
          _data = _ref3.data;

          if (_data[_coin][_vsCurrency]) {
            _context3.next = 30;
            break;
          }

          throw Error();

        case 30:
          return _context3.abrupt("return", message.reply(" CYT = ".concat(_data[_coin][_vsCurrency])));

        case 33:
          _context3.prev = 33;
          _context3.t1 = _context3["catch"](21);
          console.log(_context3.t1);

        case 36:
          if (!message.content.startsWith('pvu')) {
            _context3.next = 53;
            break;
          }

          getPlay();
          _context3.prev = 38;
          _coin2 = 'plant-vs-undead-token';
          _vsCurrency2 = 'php'; // Get crypto price from coingecko API

          _context3.next = 43;
          return regeneratorRuntime.awrap(axios.get("https://api.coingecko.com/api/v3/simple/price?ids=plant-vs-undead-token&vs_currencies=php"));

        case 43:
          _ref4 = _context3.sent;
          _data2 = _ref4.data;

          if (_data2[_coin2][_vsCurrency2]) {
            _context3.next = 47;
            break;
          }

          throw Error();

        case 47:
          return _context3.abrupt("return", message.reply(" PVU = ".concat(_data2[_coin2][_vsCurrency2])));

        case 50:
          _context3.prev = 50;
          _context3.t2 = _context3["catch"](38);
          console.log(_context3.t2);

        case 53:
          if (!message.content.startsWith('babor')) {
            _context3.next = 56;
            break;
          }

          getPlay();
          return _context3.abrupt("return", message.reply('MAANGAS NA NILALANG'));

        case 56:
          if (!message.content.startsWith('mj')) {
            _context3.next = 58;
            break;
          }

          return _context3.abrupt("return", message.reply('MAANGAS NA NILALANG'));

        case 58:
          if (!message.content.startsWith('jacob')) {
            _context3.next = 60;
            break;
          }

          return _context3.abrupt("return", message.reply('WALANG JOWA'));

        case 60:
          if (!message.content.startsWith('kazz')) {
            _context3.next = 62;
            break;
          }

          return _context3.abrupt("return", message.reply('JIWAO'));

        case 62:
          if (!message.content.startsWith('TEST')) {
            _context3.next = 64;
            break;
          }

          return _context3.abrupt("return", message.reply('NICE'));

        case 64:
          if (!message.content.startsWith('porn')) {
            _context3.next = 66;
            break;
          }

          return _context3.abrupt("return", message.reply('BAWAL YAN'));

        case 66:
          if (!message.content.startsWith('sora')) {
            _context3.next = 68;
            break;
          }

          return _context3.abrupt("return", message.reply('bobo'));

        case 68:
          if (!message.content.startsWith('aron')) {
            _context3.next = 70;
            break;
          }

          return _context3.abrupt("return", message.reply('garapal'));

        case 70:
          if (!message.content.startsWith('tangina')) {
            _context3.next = 72;
            break;
          }

          return _context3.abrupt("return", message.reply('tangina mo din'));

        case 72:
          if (!message.content.startsWith('!price')) {
            _context3.next = 92;
            break;
          }

          // Get the params
          _message$content$spli = message.content.split(' '), _message$content$spli2 = _toArray(_message$content$spli), command = _message$content$spli2[0], args = _message$content$spli2.slice(1); // Check if there are two arguments presenargs==t

          if (!(args.length !== 2)) {
            _context3.next = 78;
            break;
          }

          return _context3.abrupt("return", message.reply('You must provide the crypto and the currency to compare with!'));

        case 78:
          _args3 = _slicedToArray(args, 2), _coin3 = _args3[0], _vsCurrency3 = _args3[1];
          _context3.prev = 79;
          _context3.next = 82;
          return regeneratorRuntime.awrap(axios.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(_coin3, "&vs_currencies=").concat(_vsCurrency3)));

        case 82:
          _ref5 = _context3.sent;
          _data3 = _ref5.data;

          if (_data3[_coin3][_vsCurrency3]) {
            _context3.next = 86;
            break;
          }

          throw Error();

        case 86:
          return _context3.abrupt("return", message.reply("ETO LODS 1 : ".concat(_coin3, " = ").concat(_data3[_coin3][_vsCurrency3], " ").concat(_vsCurrency3)));

        case 89:
          _context3.prev = 89;
          _context3.t3 = _context3["catch"](79);
          return _context3.abrupt("return", message.reply('Please check your inputs. For example: !price bitcoin usd'));

        case 92:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 16], [21, 33], [38, 50], [79, 89]]);
}); // Reply to !price

keepAlive();