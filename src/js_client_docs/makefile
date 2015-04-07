.PHONY: install
install: all
	cp out/canopy_js_client.html ../../www/devzone/js_client/index.html
	cp ../common/hammock-custom.css ../../www/devzone/js_client/

.PHONY: all
all:
	python ../../../hammock/hammock.py --template=canopy_js_client_template.html canopy_js_client.xml
