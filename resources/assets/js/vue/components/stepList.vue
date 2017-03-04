<template>
        <div class="col-md-4 col-md-offset-1">
        <div class="panel panel-default" v-if="show">
            <div class="panel-heading">
                <h2 v-if="remains.length && type=='remaings' ">待完成的步骤（{{ remains.length }}）
                    <button class="btn btn-info btn-sm" @click="completeAll">完成所有</button>
                </h2>    

                <h2  v-if="completions.length && type=='completed'">已完成的步骤（{{ completions.length }}）
                    <button class="btn btn-danger btn-sm" @click="clearCompleted">清除所有</button> 
                </h2>

            </div>
            <div class="panel-body">
                <ul class="list-group"> 
                <transition name="custom-classes-transition" v-for="step in typeSwitch"   
 leave-active-class="animated rollOut"
>    
                    <li  class="list-group-item animated rollIn" >
                        <span @dblclick="editStep(step)">{{ step.name }}</span>
                        <span class="pull-right">
                            <i class="fa fa-check " @click="toggleCompletion(step)"></i>
                            <i class="fa fa-close " @click="removeStep(step)"></i>
                        </span>
                    </li>
                </transition>
                </ul>
            </div>
        </div>

        <div class="panel panel-default" v-if="type=='remaings'">
            <div class="panel-heading">
                <div class="" style="padding-left: 1.5em">
                    <label v-if="!newStep" for="label_step">完成这任务需要哪些步骤呢？</label>
                    <label v-else for="label_step">正在输入中....</label>
                </div>  
            </div>
        <div class="panel-body">
        <form @submit.prevent="addStep" class="form-inline-fullwith">
            <div class="form-group">
                <input type="text" v-model="newStep" id="label_step" ref="newStep" class="form-control" placeholder="I need to ...">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary" v-if="this.newStep">添加步骤</button>
            </div>
        </form> 
        </div>
        </div>

    </div>





</template>

<script>
    export default {
        props: ['steps','type'],
        data: function () {
            return {
                newStep: ''
            }
        },
        methods: {
            editStep: function (step) {
                 this.$emit('edit', step);
            },
            toggleCompletion: function(step){
                 this.$emit('toggle', step);
            },
            removeStep: function(step){
                this.$emit('remove', step);
            },
            addStep: function () {
                this.$emit('new', this.newStep);
                this.newStep = '';
            },      
            completeAll: function () {
                this.$emit('complete');
            },
            editStep: function (step) {
                this.removeStep(step);
                this.newStep = step.name;
                this.$refs.newStep.focus();
            },
            clearCompleted: function () {
                this.$emit('clear');
            },
            },
            computed: {
            completeSteps: function () {
               return this.steps.filter(function (step) {
               if (step.completed == false) return step;
           })
           },
            completedSteps: function () {
               return this.steps.filter(function (step) {
               if (step.completed == true) return step;
            })  
            },
            completions: function () {
                return this.steps.filter(function (step) {
                    return step.completed == true; 
                });
            },
            remains: function () {
                return this.steps.filter(function (step) {
                    return step.completed == false; 
                });
            },
            typeSwitch: function() {
                var vm = this;
                if(vm.type == 'remaings'){
                     return this.steps.filter(function (step) {
                       if (step.completed == false) return step;
                   })
                }
               return this.steps.filter(function (step) {
                   if (step.completed == true) return step;
                }) 
            },
            show: function (){
                var case1 = this.remains.length && this.type=='remaings';   
                var case2 = this.completions.length && this.type=='completed'; 
                if(case2 || case1){
                    return true;
                }  
            },
     },

    }
</script>

<style>
    
</style>

