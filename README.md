# mkdocs-site
ЧТОБЫ ПРОВЕРИТЬ ПРАКТИКУ 1 НЕОБХОДИМО СКЛОНИРОВАТЬ РЕПОЗИТОРИЙ И ВВЕСТИ КОМАНДУ git checkout 8ef56e728667cd529f00fc9653b3b4ee76b1e4b8 (Произойдет переход на нужный коммит) 

ЧТОБЫ ПРОВЕРИТЬ ПРАКТИКУ 2 НЕОБХОДИМО СКЛОНИРОВАТЬ РЕПОЗИТОРИЙ И ВВЕСТИ КОМАНДУ git checkout 601024c5f5f0866dc9b4469e9cc31f2c5d307055 (Произойдет переход на нужный коммит) 
*Развернул сайт с помощью генератора статических сайтов **MkDocs**. Для этого создал изолированное Python окружение, установил непосредственно MkDocs, сгенерировал сайт и сбилдил с помощью команды **mkdocs build**.
Для минификации html, js и css был использован webpack. Для его настройки был добавлен файл wtbpack.config.ts, в котором описана конфигурация сборки. Для запуска github actions был добавлен файл **mkdocs-actions.yml**, где описаны действия и этапы, которые необходимо совершить. В начале файла я определил условие выполнение action - это push в ветку main. Затем я определил jsob build, которая состоит из следующих этапов: 
- **Checkout** (перехода в репозиторий, переход на ветку main и другие действия, связанные с репозиторием),
- **Setup Node** (установка nodejs),
- **Installing Dependencies** (установка зависимостей),
- **Build Webpack** (запуск билда webpack),
- **Python Setup** (установка python),
- **MkDocs Setup** (установка MkDocs),
- **Build** (запуск билда MkDocs),
- **Upload artifact** (позволяет упаковать и отправить артефакты)
- **Deploy to GitHub Pages** (непосредственный деплой на гитхаб пейджес).*
