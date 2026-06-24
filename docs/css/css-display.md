.leftWrapper {
display: flex;
flex-direction: row;
}
.homeWrapper {
display: grid;
grid-template-columns: 1fr 3fr;
}

#Questions

1. json里换行, 但html render 的时候没有显示
   A: set CSS style **white-space**： pre-line
   Comment: **white-space** controls how HTML handle whitespace, tab and \n
   | value | multiple white space | \n change line | automatic change line|
   ***
   ## | normal(default)| merge｜ignore｜ yes｜
   ## ｜pre ｜ keep ｜ keep ｜ no｜
   ## ｜ pre-wrap ｜ keep ｜ keep ｜ yes｜
   ## ｜ pre-wrap ｜ keep ｜ keep ｜ yes ｜
   ## ｜ pre-line ｜ merge ｜ keep ｜ yes｜
   pre： from tag<pre> (preformatted text)
