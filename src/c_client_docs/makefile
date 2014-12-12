.PHONY: install
install: all
	cp out/canopy_c_client.html ../../www/devzone/c_client/index.html
	cp ../common/hammock-custom.css ../../www/devzone/c_client/

.PHONY: all
all:
	python ../../../hammock/hammock.py --template=canopy_c_client_template.html canopy_c_client.xml
