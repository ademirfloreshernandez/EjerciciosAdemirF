def imprimir_matriz(matriz):
    filas = len(matriz)
    columnas = len(matriz[0])

    for i in range(filas):
        fila = ""
        for j in range(columnas):
            if j == columnas - 1:
                fila += " | "
            fila += f"{matriz[i][j]:8.2f}"
        print(fila)
    print()



def gauss_jordan(matriz):
    filas = len(matriz)
    columnas = len(matriz[0])

    print("\nMatriz inicial:")
    imprimir_matriz(matriz)

    for i in range(filas):
        print(f"--- Paso {i+1} ---")

        pivote = matriz[i][i]

        # Si el pivote es 0, intercambiar filas
        if pivote == 0:
            for j in range(i+1, filas):
                if matriz[j][i] != 0:
                    print(f"Intercambiando fila {i+1} con fila {j+1}")
                    matriz[i], matriz[j] = matriz[j], matriz[i]
                    break
            pivote = matriz[i][i]

        # Hacer pivote = 1
        print(f"Dividiendo fila {i+1} entre {pivote}")
        for j in range(columnas):
            matriz[i][j] /= pivote

        imprimir_matriz(matriz)

        # Hacer ceros en la columna
        for k in range(filas):
            if k != i:
                factor = matriz[k][i]
                print(f"Fila {k+1} = Fila {k+1} - ({factor}) * Fila {i+1}")
                for j in range(columnas):
                    matriz[k][j] -= factor * matriz[i][j]

        imprimir_matriz(matriz)

    return matriz


def ingresar_matriz():
    while True:
        try:
            filas = int(input("Número de ecuaciones: "))
            break
        except:
            print("Ingresa un número válido")

    print("\nAhora ingresa la matriz aumentada (incluye el resultado al final):")
    print("Ejemplo: 2 1 5")

    matriz = []
    for i in range(filas):
        while True:
            try:
                fila = list(map(float, input(f"Fila {i+1}: ").split()))
                if len(fila) != filas + 1:
                    print(f"Debes ingresar {filas + 1} valores")
                else:
                    matriz.append(fila)
                    break
            except:
                print("Error, intenta de nuevo")

    return matriz


def mostrar_resultados(matriz):
    print("Matriz final (forma identidad):")
    imprimir_matriz(matriz)

    print("Soluciones:")
    for i in range(len(matriz)):
        print(f"x{i+1} = {matriz[i][-1]:.2f}")


# PROGRAMA PRINCIPAL
matriz = ingresar_matriz()
resultado = gauss_jordan(matriz)
mostrar_resultados(resultado)