import re
s = "[[You|Tú]] [[should|deberías]] [[try|intentar]] [[to get|dormir]] [[at|al]] [[least|menos]] [[eight|ocho]] [[hours|horas]] [[of|de]] [[sleep|sueño]] [[every|cada]] [[night|noche]]."
parts = re.findall(r'\[\[.*?\|.*?\]\]|[.,!?;:]|\S+', s)
print(parts)
