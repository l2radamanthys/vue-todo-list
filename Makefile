comandos:
	@echo ""
	@echo "COMANDOS"
	@echo ""

ejecutar:
	@npm run serve

compilar:
	@npm run build

deploy:
	rm -fr ./static
	cp -fr ./dist ./static

ui:
	vue ui
