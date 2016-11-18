define([
    './hft/scripts/misc/gameclock',
    './hft/scripts/misc/ticker',
    './hft/scripts/misc/timeout',
    './hft/scripts/gamesupport',
  ], function (
    gameclock,
    Ticker,
    timeout,
    gameSupport
  ) {

  return {
    gameclock: gameclock,
    Ticker: Ticker,
    timeout: timeout,
    gameSupport: gameSupport,
  };
});

