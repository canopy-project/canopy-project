.PHONY: install
install: all
	cp out/canopy_api.html hammock-custom.css ../../www/devzone/restapi

.PHONY: all
all:
	python ../../../hammock/hammock.py --template=canopy_api_template.html canopy_api.xml
