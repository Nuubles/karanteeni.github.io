'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_React$Component) {
    _inherits(Month, _React$Component);

    function Month(props) {
        _classCallCheck(this, Month);

        var _this = _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, props));

        _this.state = {
            month: _this.props.month, /* Aina pienellä esim. maaliskuu2019 */
            btntext: _this.props.btntext /* Normaalisti esim. Maaliskuu 2019 */
        };
        return _this;
    }

    _createClass(Month, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'card bg-transparent border-gold' },
                React.createElement(
                    'div',
                    { 'class': 'card-header', id: this.props.month + '_1' },
                    React.createElement(
                        'h5',
                        { 'class': 'mb-0' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-link', type: 'button', 'data-toggle': 'collapse', 'data-target': '#' + this.props.month, 'aria-expanded': 'false', 'aria-controls': this.props.month },
                            this.props.btntext
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return Month;
}(React.Component);

var Changebody = function (_React$Component2) {
    _inherits(Changebody, _React$Component2);

    function Changebody(props) {
        _classCallCheck(this, Changebody);

        var _this2 = _possibleConstructorReturn(this, (Changebody.__proto__ || Object.getPrototypeOf(Changebody)).call(this, props));

        _this2.state = {
            class: _this2.props.class,
            month: _this2.props.month
        };
        return _this2;
    }

    _createClass(Changebody, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: this.props.month, className: 'collapse ' + (this.props.showing ? 'show' : null), 'aria-labelledby': this.props.month + '_1', 'data-parent': '#muutokset' },
                React.createElement(
                    'div',
                    { className: 'card-body' },
                    this.props.children
                )
            );
        }
    }]);

    return Changebody;
}(React.Component);

var ChangeDate = function (_React$Component3) {
    _inherits(ChangeDate, _React$Component3);

    function ChangeDate(props) {
        _classCallCheck(this, ChangeDate);

        var _this3 = _possibleConstructorReturn(this, (ChangeDate.__proto__ || Object.getPrototypeOf(ChangeDate)).call(this, props));

        _this3.state = {
            date: _this3.props.date /* Päivämäärä */
        };
        return _this3;
    }

    _createClass(ChangeDate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                this.props.date
            );
        }
    }]);

    return ChangeDate;
}(React.Component);

var Changelist = function (_React$Component4) {
    _inherits(Changelist, _React$Component4);

    function Changelist(props) {
        _classCallCheck(this, Changelist);

        var _this4 = _possibleConstructorReturn(this, (Changelist.__proto__ || Object.getPrototypeOf(Changelist)).call(this, props));

        _this4.state = {
            change: _this4.props.change
        };
        return _this4;
    }

    _createClass(Changelist, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props.change
            );
        }
    }]);

    return Changelist;
}(React.Component);

var ChangeLog = function (_React$Component5) {
    _inherits(ChangeLog, _React$Component5);

    function ChangeLog() {
        _classCallCheck(this, ChangeLog);

        return _possibleConstructorReturn(this, (ChangeLog.__proto__ || Object.getPrototypeOf(ChangeLog)).apply(this, arguments));
    }

    _createClass(ChangeLog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'accordion text-left' },
                React.createElement(
                    Month,
                    { month: 'marraskuu2019', btntext: 'Marraskuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'marraskuu2019', showing: true },
                        React.createElement(ChangeDate, { date: '22.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Discord chatin v\xE4rit korjattu' })
                        ),
                        React.createElement(ChangeDate, { date: '16.11.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Tuomas veturi p\xE4ivitetty' }),
                            React.createElement(Changelist, { change: 'Looppaus + random toimii nyt' }),
                            React.createElement(Changelist, { change: 'Voikukat korjattu' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'lokakuu2019', btntext: 'Lokakuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'lokakuu2019' },
                        React.createElement(ChangeDate, { date: '31.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: '/sit tuotu takaisin' })
                        ),
                        React.createElement(ChangeDate, { date: '26.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: '/vote toimii taas' }),
                            React.createElement(Changelist, { change: '(Realistinen) el\xE4intenkanto takaisin servulla' })
                        ),
                        React.createElement(ChangeDate, { date: '25.10.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: '/nime\xE4 komento lis\xE4tty palvelimelle' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty yll\xE4pidolle /setsign' }),
                            React.createElement(Changelist, { change: 'Korjattu viestibugi /nick player nick -komennossa (koskien yll\xE4pitoa)' }),
                            React.createElement(Changelist, { change: '/baltop korjattu' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'syyskuu2019', btntext: 'Syyskuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'syyskuu2019', showing: false },
                        React.createElement(ChangeDate, { date: '25.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Tpa:n /back fixattu oikeiden pelaajien sijaintiin' }),
                            React.createElement(Changelist, { change: 'mobGriefing asetettu takaisin p\xE4\xE4lle' })
                        ),
                        React.createElement(ChangeDate, { date: '24.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Tp:n ja /spawn komennon /back tallentaa nyt sijainnin' })
                        ),
                        React.createElement(ChangeDate, { date: '21.09.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: '/kms ja /kys lis\xE4tty' }),
                            React.createElement(Changelist, { change: 'Spawnerit putoaa taas Silk Touch -enchantilla' })
                        )
                    )
                ),
                React.createElement(
                    Month,
                    { month: 'elokuu2019', btntext: 'Elokuu 2019' },
                    React.createElement(
                        Changebody,
                        { month: 'elokuu2019', showing: false },
                        React.createElement(ChangeDate, { date: '19.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Coreprotect osaa nyt tallentaa lent\xE4v\xE4t blockit' }),
                            React.createElement(Changelist, { change: 'Tnt ja tnt_minecart ei en\xE4\xE4 lenn\xE4t\xE4 niin paljon blockei -> parempia raivaukseen' }),
                            React.createElement(Changelist, { change: 'lis\xE4tty custom recipet servulle' })
                        ),
                        React.createElement(ChangeDate, { date: '17.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Paranneltu databasen k\xE4ytt\xF6\xF6: StatManager, Karanteenials, KaranteeniPerms, Chatar' }),
                            React.createElement(Changelist, { change: 'Mahdollisesti v\xE4hennetty joinauksesta seuraavaa lagia: KaranteeniPerms, Karanteenials, KaranteeniCore, StatManager, Chatar (vaihdettu db sync -> async. jos ongelmia ilmenee niin ilmoittakaa)' }),
                            React.createElement(Changelist, { change: 'Lis\xE4tty automaattinen restart (yp k\xE4ytt\xE4k\xE4\xE4 komentoa /restarter:restart)' }),
                            React.createElement(Changelist, { change: 'Poistettu virheellisi\xE4 blockeja taikamatosta' }),
                            React.createElement(Changelist, { change: 'L\xF6ydetty ISO bugi timereista joka johti siihen ett\xE4 kaikki timerit ajettiin joka tickill\xE4. Nyt fixattu, hyv\xE4ll\xE4 tuurilla isoja vaikutuksia tehokkuuteen' }),
                            React.createElement(Changelist, { change: 'Operaattorista yl\xF6sp\xE4in oikat /player kill <nimi>' })
                        ),
                        React.createElement(ChangeDate, { date: '16.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: '/rtp toimii, aiempaa nopeampi ja ei mene veden alle' })
                        ),
                        React.createElement(ChangeDate, { date: '13.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Fixattu "ep\xE4turvallinen sijainti" teleportatessa' }),
                            React.createElement(Changelist, { change: 'Fixattu puuttunut \xE4\xE4ni kotiin teleportatessa' }),
                            React.createElement(Changelist, { change: '/rtp tehostettu' }),
                            React.createElement(Changelist, { change: 'Fixattu rtp veden alle vienti' })
                        ),
                        React.createElement(ChangeDate, { date: '11.08.2019' }),
                        React.createElement(
                            'ul',
                            null,
                            React.createElement(Changelist, { change: 'Uusi versio ja uudet kujeet. 1.14 on saapunut.' })
                        )
                    )
                )
            );
        }
    }]);

    return ChangeLog;
}(React.Component);

ReactDOM.render(React.createElement(ChangeLog, null), document.getElementById('muutokset'));