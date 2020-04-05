//@version=4
strategy("Bollinger Bands Strategy", overlay=true)
source = close
length = input(20, minval=1)
mult = input(2.0, minval=0.001, maxval=50)

basis = sma(source, length)
dev = mult * stdev(source, length)

upper = basis + dev
lower = basis - dev
x = basis * 0.006
basisPlus = basis + x
basisMinus = basis - x

buyEntry = crossunder(upper, basisPlus)
sellEntry = crossover(source, upper)

if (crossunder(upper, basisPlus))
    strategy.entry("BBandLE", strategy.long, stop=lower, oca_name="BollingerBands", oca_type=strategy.oca.none, comment="BBandLE")
else
    strategy.cancel(id="BBandLE")

if (crossover(source, upper))
    strategy.entry("BBandSE", strategy.short, stop=upper, oca_name="BollingerBands", oca_type=strategy.oca.none, comment="BBandSE")
else
    strategy.cancel(id="BBandSE")

//plot(rsi(close, 14), title="rsi", color=color.white, linewidth=1, style=plot.style_line, transp=20)
plot(upper, title="upper", color=color.yellow, linewidth=1, style=plot.style_line, transp=20)
plot(lower, title="lower", color=color.yellow, linewidth=1, style=plot.style_line, transp=20)
plot(basis, title="basis", color=color.blue, linewidth=1, style=plot.style_line, transp=20)    
plot(basisPlus, title="basisPlus", color=color.red, linewidth=1, style=plot.style_stepline, transp=20)
plot(basisMinus, title="basisMinus", color=color.red, linewidth=1, style=plot.style_stepline, transp=20)
//plot(strategy.netprofit, title="netprofit", color=color.red, linewidth=1, style=plot.style_stepline)
