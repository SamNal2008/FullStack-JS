#! /bin/sh

echo -n "What is the name of the component you want to create : " && \
read input && \
echo 'Okay then the component' '"'$input'"' 'will be created'; \
echo 'Creating the module of ' $input && nest g module $input && \
echo 'Creating the controller of ' $input && nest g controller $input && \
echo 'Creating the service of ' $input && nest g service $input && \
echo 'Creating interface of ' $input && mkdir src/$input/interface && echo "export interface $input {};" > src/$input/interface/$input.interface.ts && \
echo 'Creating DTO of ' $input && mkdir src/$input/dto && echo 'All setup !';