
### If running the build when NOT signed into Docker account, the :1 is part of the name of the image, it tells us that this is version 1 and can be changed as you update

#!/bin/sh
docker build -t gtel-dashops-doc:1 .

docker run -p 8080:8080 gtel-dashops-doc:1

### If running the build WHEN SIGNED INTO Docker account

#docker build -t *username*/gtel-dashops-doc:1 .

#docker run -p 8080:8080 *username*/gtel-dashops-doc:1