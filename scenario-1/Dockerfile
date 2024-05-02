FROM    node:9-alpine
ADD     https://raw.githubusercontent.com/fjodoin-pklabs/public/main/scenario-1/package.json /
ADD     https://raw.githubusercontent.com/fjodoin-pklabs/public/main/scenario-1/server.js /
ENV     APP_ID="$pklabsContainerSPNAppID"
ENV 	APP_KEY="$pklabsContainerSPNSecret"
ENV	TENANT_ID="$tenantId"
RUN     npm install
EXPOSE  80
CMD     ["node", "server.js"]
