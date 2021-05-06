# Git flow
[__Referência__](http://www2.decom.ufop.br/terralab/entendendo-o-funcionamento-do-cicd-dentro-do-git-flow/)

## Regras gerais

1. Todo projeto deve conter duas trunks (branchs fixas raiz): **main** (master para antigos projetos) e **develop**;
2. Todos os checkouts para desenvolvimento de novas features deverão acontecer a partir **develop**;
3. Todas as entregas de novas *releases* deverão acontencer a partir de uma **staging**;
4. Bugs em produção poderão ser corrigidos através de **hotfix**;

## Branches:

  * main
  * develop
  * feature/name-of-feature
  * hotfix/name-of-hotfix
  * staging/* .* .*

Main: contém todo código que deve estar em produção;

Develop: contém o código atualizado de desenvolvimento; ninguém desenvolve diretamente aqui, mas todas as features são entregues via merge aqui.

Feature: contém o código da implementação de novas features; tudo que é desenvolvido aqui deve ser entregue novamente a trunk Develop;

Staging: contém o código candidato a uma nova release, criado a partir do checkout na develop (e caminha independente da Develop); uma nova release pode ser enviada para ambiente de testes; caso haja alterações a serem feitas na release, deverá fazer um checkout de uma nova feature, corrigir e realizar o merge na staging/*. *. * correspondente e Develop trunk;

Hotfix: realiza checkout na main, corrige o bug, entrega realizando o merge na main e develop.

> obs: onde cada * corresponde a versão (os detalhes da branch deverão ser descritos no pull request)
