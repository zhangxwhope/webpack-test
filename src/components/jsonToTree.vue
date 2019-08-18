<template>
  <div class="mod-menu-tree">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(menu, index) in showMenus">
        <el-submenu v-if="menu.childrens.length" :key="index" :index="`${index}`">
          <template slot="title">
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item v-for="(sub, idx) in menu.childrens" :key="`${index}-${idx}`" :index="`${index}-${idx}`">{{ sub.name }}</el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="index" :index="`${index}`">
          <span slot="title">{{ menu.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          mcode: '01',
          name: '分组1',
          pcode: '0'
        },
        {
          mcode: '02',
          name: '分组2',
          pcode: '0'
        },
        {
          mcode: '01-01',
          name: '主菜单1',
          pcode: '01'
        },
        {
          mcode: '02-01',
          name: '主菜单2',
          pcode: '02'
        },
        {
          mcode: '01-01-01',
          name: '子菜单1',
          pcode: '01-01'
        },
        {
          mcode: '01-01-02',
          name: '子菜单2',
          pcode: '01-01'
        },
        {
          mcode: '02-01-01',
          name: '子菜单3',
          pcode: '02-01'
        }
      ],
      showMenus: [] // 展示的树状结构
    }
  },
  created () {
    this.showMenus = this.dataToTree(this.lists)
  },
  methods: {
    dataToTree (data) {
      let group = data.filter(value => value.pcode === '0') // 先找出分组
      let groupIds = group.map(item => item.mcode)
      let parents = data.filter(value => groupIds.includes(value.pcode)) // 对应分组的父级菜单
      let childrens = data.filter(value => value.pcode !== 'undefined' && value.pcode !== null) // 所有子菜单
      let translator = (parents, childrens) => {
        parents.forEach((parent) => {
          childrens.forEach((current, index) => {
            if (current.pcode === parent.mcode) {
              let temp = JSON.parse(JSON.stringify(childrens))
              temp.splice(index, 1)
              translator([current], temp)
              typeof parent.childrens !== 'undefined' ? parent.childrens.push(current) : parent.childrens = [current]
            }
          }
          )
        }
        )
      }

      translator(parents, childrens)
      return parents
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
