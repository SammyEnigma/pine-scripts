//@version=4
study(shorttitle="BB", title="BB-2020", overlay=true)
length = input(20, minval=1)
src = input(close, title="Source")
mult = input(2.0, minval=0.001, maxval=50)
basis = sma(src, length)
dev = mult * stdev(src, length)
upper = basis + dev
lower = basis - dev
x = basis * 0.006
upperavg = basis + x
loweravg = basis - x
plot(upperavg, color=color.red, style=plot.style_stepline, title="upperavg", transp=45)
plot(loweravg, color=color.red, style=plot.style_stepline, title="loweravg", transp=45)
plot(basis, color=color.red, style=plot.style_stepline, title="basis")
p1 = plot(upper, color=color.blue, title="upper")
p2 = plot(lower, color=color.blue, title="lower")
fill(p1, p2)