.PHONY: install
install: all
	cp out/canopy_raspi.html ../../www/devzone/c_client/raspi.html
	cp ../common/hammock-custom.css ../../www/devzone/c_client/

.PHONY: all
all:
	python ../../../hammock/hammock.py --template=canopy_raspi_template.html canopy_raspi.xml
