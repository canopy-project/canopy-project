.PHONY: install
install: all
	cp out/ccs_docs.html hammock-custom.css ../../www/devzone/ccs

.PHONY: all
all:
	python ../../../hammock/hammock.py --template=ccs_docs_template.html ccs_docs.xml
