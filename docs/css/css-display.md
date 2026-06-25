.leftWrapper {
display: flex;
flex-direction: row;
}
.homeWrapper {
display: grid;
grid-template-columns: 1fr 3fr;
}

span {
line-height: 1.6; /_ 1.6 times the current font-size _/
}

**react-icons：**
import {
FaGithub,
FaLinkedin,
} from "react-icons/fa";

import {
MdEmail,
} from "react-icons/md";

然后

<FaGithub size={28}/>

优点：
不会糊
大小统一
颜色统一
hover 改颜色非常方便
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

2. .uniContent { gap: 65px; } 和 .bar { left: 30px; } 在移动端把内容往右推了；再加上文字列没有 min-width: 0，所以容易撑宽。
