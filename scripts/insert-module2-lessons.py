#!/usr/bin/env python3
"""
Script para insertar las lecciones faltantes del módulo 2 en el archivo course-data-b2.ts
"""

# Leer el archivo temporal con las lecciones 3-6
with open('/home/user/webapp/temp-module2-lessons-3-6.ts', 'r') as f:
    new_lessons = f.read()

# Leer el archivo principal
with open('/home/user/webapp/lib/course-data-b2.ts', 'r') as f:
    content = f.read()

# Buscar el punto de inserción (antes del cierre de MODULE_2_LESSONS)
# Buscamos el patrón: "  }\n];\n\n// Continue with remaining Module 2 lessons"
search_pattern = """  }
];

// Continue with remaining Module 2 lessons"""

# Crear el reemplazo: la lección existente + las nuevas lecciones + el cierre
replacement = """  },
""" + new_lessons + """];

// Continue with remaining Module 2 lessons"""

# Realizar el reemplazo
if search_pattern in content:
    content = content.replace(search_pattern, replacement)
    print("✅ Lecciones insertadas correctamente")
    
    # Guardar el archivo modificado
    with open('/home/user/webapp/lib/course-data-b2.ts', 'w') as f:
        f.write(content)
    print("✅ Archivo guardado")
else:
    print("❌ No se encontró el patrón de búsqueda")
    print("Buscando patrones alternativos...")
    
    # Intentar patrón alternativo
    alt_pattern = "// Continue with remaining Module 2 lessons"
    if alt_pattern in content:
        # Encontrar la línea anterior
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if alt_pattern in line:
                print(f"Encontrado en línea {i}: {line}")
                # Insertar antes de esta línea
                lines.insert(i, new_lessons.rstrip())
                content = '\n'.join(lines)
                
                with open('/home/user/webapp/lib/course-data-b2.ts', 'w') as f:
                    f.write(content)
                print("✅ Archivo guardado con método alternativo")
                break
    else:
        print("❌ No se pudo encontrar el punto de inserción")

print("\nVerificando resultado...")
import subprocess
result = subprocess.run(['grep', '-c', 'b2-m2-l', '/home/user/webapp/lib/course-data-b2.ts'], 
                       capture_output=True, text=True)
print(f"Total de lecciones M2 en el archivo: {result.stdout.strip()}")
