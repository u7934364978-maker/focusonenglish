from PIL import Image, ImageDraw, ImageFont
import os

def create_slide(text, output_path, color):
    # Create a 1280x720 image
    img = Image.new('RGB', (1280, 720), color=color)
    d = ImageDraw.Draw(img)
    
    # Try to write some text
    try:
        # Just use a basic font or no font if not found
        d.text((50, 300), text, fill=(255, 255, 255))
    except:
        pass
        
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path)

# Lesson 1
create_slide("Formal vs Informal Greetings - Intro", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Formal Greetings", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Informal Greetings", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Job Interview Basics", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("First Impressions", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Interview Phrases", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Writing Professional Emails", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Email Greetings", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Polite Openings", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana01/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 2
# Lesson 1
create_slide("What Time Is It?", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Telling the Time", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Time Practice", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Office Hours", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Describing Your Day", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Schedules", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Making an Appointment", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Availability", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Confirmation", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana02/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 3
# Lesson 1
create_slide("Job Titles and Roles", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Introducing Colleagues", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Department Names", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Questions with 'To Be'", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Short Answers", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Professional Roles", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Office Equipment", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Demonstratives (This/That)", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Supplies Inventory", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana03/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 4
# Lesson 1
create_slide("Common Interview Questions", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Preparation Tips", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Confidence Building", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Talking About Experience", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Action Verbs", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Transferable Skills", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Personal Information Forms", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Form Fields (Name/Address)", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Block Capitals & Signature", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana04/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 5
# Lesson 1
create_slide("Email Subject Lines", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Being Specific", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Professional Subject Lines", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Formal vs Informal Requests", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Using 'Could' and 'Would'", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Maintaining Politeness", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Attachments and Links", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Mentioning Attachments", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Sharing Professional Links", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana05/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 6
# Lesson 1
create_slide("Parts of a Meeting", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Agenda & Roles", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Meeting Etiquette", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Meeting Invitations", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Responding to Invites", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Calendar Management", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Following Up", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Meeting Summary (Minutes)", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Action Items", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana06/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 7
# Lesson 1
create_slide("Office Supplies Vocabulary", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Restocking Supplies", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Proactive Organization", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Ordering Supplies", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Approvals & Budgets", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Delivery Notes", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Inventory Management", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Updating Records", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Tracking Usage", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana07/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 8
# Lesson 1
create_slide("Business Letter Layout", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Standard Structure", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Professional Closings", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Professional Phrases", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Inquiries & Informing", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Building Trust", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("Internal Memos", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Memo Headers", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Direct Communication", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana08/lesson3/slides/slide_003.png", (230, 126, 34))

# WEEK 9
# Lesson 1
create_slide("Taking Phone Messages", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson1/slides/slide_001.png", (41, 128, 185))
create_slide("Essential Information", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson1/slides/slide_002.png", (39, 174, 96))
create_slide("Accuracy Checks", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson1/slides/slide_003.png", (230, 126, 34))

# Lesson 2
create_slide("Answering Calls", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson2/slides/slide_001.png", (41, 128, 185))
create_slide("Hold Etiquette", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson2/slides/slide_002.png", (39, 174, 96))
create_slide("Summarizing Actions", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson2/slides/slide_003.png", (230, 126, 34))

# Lesson 3
create_slide("International Calls", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson3/slides/slide_001.png", (41, 128, 185))
create_slide("Time Zones", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson3/slides/slide_002.png", (39, 174, 96))
create_slide("Managing Connections", "src/content/cursos/trabajo/administracion/a1-redesign/assets/semana09/lesson3/slides/slide_003.png", (230, 126, 34))
