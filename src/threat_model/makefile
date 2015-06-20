.PHONY: install
install: all
	cp out/threat_model.html ../../www/devzone/threat_model/index.html
	cp ../common/hammock-custom.css ../../www/devzone/threat_model/

.PHONY: all
all:
	python ../../../hammock/hammock.py --template=threat_model.html threat_model.xml
