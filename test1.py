def outer_dec(x):
    def th_dec(fun):
        def wraper(*a, **k):
            print("*"*x)
            fun(*a, **k)
            print("*"*x)
        return wraper
    return th_dec

@outer_dec(5)
def out_fun(msg):
    print(msg)


out_fun("ok")